import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "./listEmployees.module.scss";

export default function ListEmployees() {
	const [dataSearchInput, setDataSearchInput] = useState("");
	const [minEntries, setMinEntries] = useState(0);
	const [maxEntries, setMaxEntries] = useState(10);
	const [page, setPage] = useState(0);

	console.log(setMinEntries);

	const employees = useSelector((state) => state.employee.employeeList);
	// Filter employees based on search input
	const dataSearched = employees.filter((employee) =>
		`${employee.firstName} ${employee.lastName}`
			.toLowerCase()
			.includes(dataSearchInput.toLowerCase())
	);

	// Determine data to show: filtered or all employees
	const dataShow = dataSearchInput === "" ? employees : dataSearched;

	const maxPage = Math.ceil(dataShow.length / maxEntries);

	const handleChangeEntries = (e) => {
		setMaxEntries(parseInt(e.target.value));
		setPage(0); // Reset to first page when changing number of entries
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

			{/* Entries */}
			{employees.length !== 0 && (
				<div className={styled.listEmployee__entries}>
					<span className={styled.listEmployee__entries__title}>Entries</span>
					<select
						defaultValue={10}
						onChange={handleChangeEntries}
						className={styled.listEmployee__entries__selectInput}
					>
						<option value={10}>10</option>
						<option value={25}>25</option>
						<option value={50}>50</option>
						<option value={100}>100</option>
					</select>
					<span className={styled.listEmployee__entries__total}>
						Showing {minEntries + 1} to {Math.min(maxEntries, dataShow.length)}{" "}
						of {dataShow.length} entries.
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
					.map((employee, index) => (
						<div key={index} className={styled.listEmployee__avatarItem}>
							<img
								src={employee.avatar}
								alt="Avatar"
								className={styled.avatar}
							/>
							<span className={styled.name}>{employee.firstName}</span>
							<span className={styled.name}>{employee.lastName}</span>
						</div>
					))}
			</div>
		</div>
	);
}
