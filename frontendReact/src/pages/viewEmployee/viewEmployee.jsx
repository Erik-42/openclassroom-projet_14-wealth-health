import { useSelector } from "react-redux";
import EmployeeInfo from "../../components/employeeInfo/employeeInfo.jsx";
import CreateEmployee from "../../components/createEmployee/createEmployee.jsx";
import ListEmployee from "../../components/listEmployees/listEmployees.jsx";
import styled from "./viewEmployee.module.scss";
import { useState } from "react";

export default function ViewEmployee() {
	// const employee = useSelector((state) => state.employee.employee);
	const selectedEmployee = useSelector(
		(state) => state.employee.selectedEmployee
	);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
	};

	return (
		<div className={styled.viewEmployee}>
			<main className={styled.viewEmployee__main}>
				{selectedEmployee ? (
					<section className={styled.viewEmployee__main__general}>
						<article className={styled.viewEmployee__main__general__employee}>
							{isEditing ? (
								<CreateEmployee onCancel={handleCancelEdit} />
							) : (
								<EmployeeInfo />
							)}
						</article>
					</section>
				) : (
					<ListEmployee />
				)}

				<div className={styled.viewEmployee__actions}>
					<p>Actions possibles sur les fiches employés:</p>
					{isEditing ? (
						<button
							className={
								styled.viewEmployee__actions__btn +
								" " +
								styled["viewEmployee__actions__btn--cancel"]
							}
							onClick={handleCancelEdit}
						>
							Cancel
						</button>
					) : (
						<button
							className={
								styled.viewEmployee__actions__btn +
								" " +
								styled["viewEmployee__actions__btn--modif"]
							}
							onClick={handleEditClick}
						>
							Modifier employés
						</button>
					)}
				</div>
			</main>
		</div>
	);
}
