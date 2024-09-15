import { useState } from "react";
import { useSelector } from "react-redux";
import EmployeeInfo from "../../components/employeeInfo/employeeInfo.jsx";
import CreateEmployee from "../../components/createEmployee/createEmployee.jsx";
import styled from "./viewEmployee.module.scss";

export default function ViewEmployee() {
	const employee = useSelector((state) => state.employee.employee);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
	};

	const handleAddEmployee = (newEmployee) => {
		setIsEditing(false);
	};

	return (
		<div className={styled.viewEmployee}>
			<nav className={styled.viewEmployee__navbar}>
				<h2 className={styled.viewEmployee__navbar__title}>HR Employee</h2>
				<div className={styled.viewEmployee__navbar__menu}>menu hamburger</div>
			</nav>

			<main className={styled.viewEmployee__main}>
				<section className={styled.viewEmployee__main__general}>
					<article className={styled.viewEmployee__main__general__viewEmployee}>
						{isEditing ? (
							<CreateEmployee onAddEmployee={handleAddEmployee} />
						) : (
							<EmployeeInfo employee={employee} />
						)}
					</article>
				</section>
				<div className={styled.btn}>
					<p>Actions possible sur les fiches employés:</p>
					{isEditing ? (
						<button className={styled.btn__cancel} onClick={handleCancelEdit}>
							Cancel
						</button>
					) : (
						<button className={styled.btn__modif} onClick={handleEditClick}>
							Modifier employés
						</button>
					)}
				</div>
			</main>
		</div>
	);
}
