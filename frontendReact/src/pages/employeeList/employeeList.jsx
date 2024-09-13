import React from "react";
import styled from "./employeeList.module.scss";

export default function ListEmployees() {
	const employees = [
		{ id: 1, name: "Alice", fonction: "Developer" },
		{ id: 2, name: "Bob", fonction: "Designer" },
		{ id: 3, name: "Charlie", fonction: "Manager" },
	];

	const EmployeeList = () => {
		return (
			<div className={styled.employeeList}>
				<h1 className={styled.employeeList__title}>Liste des employés</h1>
				<ul className={styled.employeeList__container}>
					{employees.map((employee) => (
						<li
							className={styled.employeeList__container__id}
							key={employee.id}
						>
							<h2 className={styled.employeeList__container__id__name}>
								{employee.name}
							</h2>
							<p className={styled.employeeList__container__id__function}>
								{employee.fonction}
							</p>
						</li>
					))}
				</ul>
			</div>
		);
	};
}
