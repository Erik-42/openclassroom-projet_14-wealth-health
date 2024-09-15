import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "./listEmployees.module.scss";

function ListEmployee({ data, nameData }) {
	// Search
	const [dataSearchInput, setDataSearchInput] = useState("");
	const [dataSearched, setDataSearched] = useState([]);
	const [dataSearchActive, setDataSearchActive] = useState(false);

	useEffect(() => {
		let resultFound = [];

		if (dataSearchInput !== "") {
			setPage(0);
			setDataSearched([]);
			setDataSearchActive(true);

			dataSorted.forEach((properties, index) => {
				if (
					properties.firstName
						.toLowerCase()
						.includes(dataSearchInput.toLowerCase()) ||
					properties.lastName
						.toLowerCase()
						.includes(dataSearchInput.toLowerCase())
				) {
					resultFound.push(data[index]);
				}
			});

			if (resultFound.length !== 0) {
				setDataSearched([...new Set(resultFound)]);
			} else {
				resultFound.push("None");
				setDataSearched(resultFound);
			}
		} else {
			setDataSearchActive(false);
			setDataSearched([]);
		}
	}, [dataSearchInput, dataSorted, data]);

	// Sort
	const [dataSorted, setDataSorted] = useState(data);
	const [dataShow, setDataShow] = useState(true);

	const sortData = (order, type) => {
		const sortedData = [...dataSorted].sort((a, b) => {
			return order === "ASC"
				? a[type].localeCompare(b[type])
				: b[type].localeCompare(a[type]);
		});

		if (dataSearchActive) {
			setDataSearched(sortedData);
		} else {
			setDataSorted(sortedData);
		}

		setDataShow(false);
	};

	// Entries
	const [selectedEntries, setSelectedEntries] = useState(10);
	const [minEntries, setMinEntries] = useState(0);
	const [maxEntries, setMaxEntries] = useState(0);

	const handleChangeEntries = (event) => {
		setSelectedEntries(parseInt(event.target.value));
	};

	// Pages
	const [page, setPage] = useState(0);
	const maxPage = Math.ceil(data.length / selectedEntries);

	const handlePreviousPage = () => {
		setPage((page - 1 + maxPage) % maxPage);
	};

	const handleNextPage = () => {
		setPage((page + 1) % maxPage);
	};

	useEffect(() => {
		const entryRange = dataSearchActive ? dataSearched : data;
		setMinEntries(page * selectedEntries);
		setMaxEntries(Math.min((page + 1) * selectedEntries, entryRange.length));

		if (minEntries > data.length) {
			setPage(0);
		}
	}, [page, dataSearched, dataSearchInput, selectedEntries, minEntries]);

	// Refresh
	useEffect(() => {
		setDataShow(true);
	}, [dataShow, dataSorted]);

	return (
		<div className={styled.listEmployee}>
			{/* Search */}
			{data.length !== 0 && (
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
			{data.length !== 0 && (
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
						Showing {minEntries + 1} to {maxEntries} of{" "}
						{dataSearchInput === "" ? data.length : dataSearched.length}{" "}
						entries.
					</span>
				</div>
			)}

			{/* Pagination */}
			{data.length !== 0 && (
				<div className={styled.listEmployee__pagination}>
					<button
						className={styled.listEmployee__pagination__button}
						style={{ display: !page ? "none" : "" }}
						onClick={handlePreviousPage}
					>
						Previous page
					</button>
					<button
						className={styled.listEmployee__pagination__button}
						style={{ display: page === maxPage - 1 ? "none" : "" }}
						onClick={handleNextPage}
					>
						Next page
					</button>
				</div>
			)}

			{/* Avatar List */}
			<div className={styled.listEmployee__avatarList}>
				{(dataShow && dataSearchActive ? dataSearched : dataSorted)
					.slice(minEntries, maxEntries)
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

ListEmployee.propTypes = {
	data: PropTypes.array.isRequired,
	nameData: PropTypes.array.isRequired,
};

export default ListEmployee;
