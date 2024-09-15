import { useState } from "react";
import { useSelector } from "react-redux";
import EmployeeInfo from "../../components/employeeInfo/employeeInfo.jsx";
import CreateEmployee from "../../components/createEmployee/createEmployee.jsx";
import styled from "./viewEmployee.module.scss";

export default function ViewEmployee() {
	const employee = useSelector((state) => state.employee.employee); // Get employee from Redux store
	const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit mode

	// Function to start editing
	const handleEditClick = () => {
		setIsEditing(true);
	};

	// Function to cancel editing
	const handleCancelEdit = () => {
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
						{/* Toggle between CreateEmployee and EmployeeInfo */}
						{isEditing ? (
							<CreateEmployee onCancel={handleCancelEdit} />
						) : (
							<EmployeeInfo employee={employee} />
						)}
					</article>
				</section>

				<div className={styled.btn}>
					<p>Actions possible sur les fiches employés:</p>
					{/* Show appropriate buttons based on editing state */}
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
