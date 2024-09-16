import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEmployee } from "../../store/slice/employeeSlice";
import styled from "./listEmployees.module.scss";
import defaultAvatar from "../../assets/img/avatar/default-avatar.svg";

export default function ListEmployee() {
	const dispatch = useDispatch();
	const [dataSearchInput, setDataSearchInput] = useState("");
	const [minEntries, setMinEntries] = useState(0);
	const [maxEntries, setMaxEntries] = useState(5);
	const [page, setPage] = useState(0);
	console.log(setMinEntries);
	const employees = useSelector((state) => state.employee?.employeeList || []);

	if (!Array.isArray(employees)) {
		console.error(
			"Les données des employés ne sont pas un tableau :",
			employees
		);
		return <div>Erreur lors du chargement des employés...</div>;
	}

	const dataSearched = employees.filter((employee) =>
		`${employee.firstName} ${employee.lastName}`
			.toLowerCase()
			.includes(dataSearchInput.toLowerCase())
	);

	const dataShow = dataSearchInput === "" ? employees : dataSearched;

	const maxPage = Math.ceil(dataShow.length / maxEntries);

	const handleEditClick = (employeeId) => {
		dispatch(selectEmployee(employeeId));
	};

	const handleChangeEntries = (e) => {
		setMaxEntries(parseInt(e.target.value));
		setPage(0);
	};

	const handlePreviousPage = () => {
		setPage(page > 0 ? page - 1 : 0);
	};

	const handleNextPage = () => {
		setPage(page < maxPage - 1 ? page + 1 : page);
	};

	return (
		<div className={styled.listEmployee}>
			{/* Search */}
			{employees.length !== 0 && (
				<div className={styled.listEmployee__search}>
					<span className={styled.listEmployee__search__title}>Search</span>
					<input
						id="search"
						name="search"
						onChange={(e) => setDataSearchInput(e.target.value)}
						placeholder="Search by name"
						type="search"
						className={styled.listEmployee__search__input}
					/>
				</div>
			)}

			{/* Nombre par page */}
			{employees.length !== 0 && (
				<div className={styled.listEmployee__entries}>
					<span className={styled.listEmployee__entries__title}>
						Nombre par page
					</span>
					<select
						value={maxEntries}
						onChange={handleChangeEntries}
						className={styled.listEmployee__entries__selectInput}
					>
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={25}>25</option>
						<option value={50}>50</option>
						<option value={100}>100</option>
					</select>
					<span className={styled.listEmployee__entries__total}>
						Affichage {minEntries + 1} a
						{Math.min(maxEntries, dataShow.length)}
						des {dataShow.length} Entrées.
					</span>
				</div>
			)}

			{/* Pagination */}
			{employees.length !== 0 && (
				<div className={styled.listEmployee__pagination}>
					<button
						className={styled.listEmployee__pagination__button}
						disabled={page === 0}
						onClick={handlePreviousPage}
					>
						Previous page
					</button>
					<button
						className={styled.listEmployee__pagination__button}
						disabled={page === maxPage - 1}
						onClick={handleNextPage}
					>
						Next page
					</button>
				</div>
			)}

			{/* Avatar List */}
			<div className={styled.listEmployee__avatarList}>
				{dataShow
					.slice(page * maxEntries, (page + 1) * maxEntries)
					.map((employee) => (
						<div key={employee.id} className={styled.listEmployee__avatarItem}>
							<img
								src={employee.avatar || defaultAvatar}
								alt={`${employee.firstName} ${employee.lastName}`}
								className={styled.listEmployee__avatar}
							/>
							<span className={styled.listEmployee__name}>
								{employee.firstName} {employee.lastName}
							</span>
							<button
								className={styled.listEmployee__editButton}
								onClick={() => handleEditClick(employee.id)}
							>
								view
							</button>
						</div>
					))}
			</div>
		</div>
	);
}
