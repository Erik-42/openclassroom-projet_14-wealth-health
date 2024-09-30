import { useSelector } from "react-redux";
import EmployeeInfo from "../../components/employeeInfo/employeeInfo.jsx";
import CreateEmployee from "../../components/createEmployee/createEmployee.jsx";
import ListEmployee from "../../components/listEmployees/listEmployees.jsx";
import styles from "./viewEmployee.module.scss";
import { useState } from "react";
import { selectEmployee } from "../../store/slice/employeeSlice.js";

export default function ViewEmployee() {
	const selectedEmployee = useSelector(
		(state) => state.employee.selectedEmployee
	);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = (selectedEmployee) => {
		setIsEditing(true);
		selectEmployee(selectedEmployee);
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
	};

	return (
		<div className={styles.viewEmployee}>
			<main className={styles.viewEmployee__main}>
				{selectedEmployee ? (
					<section className={styles.viewEmployee__main__general}>
						<article className={styles.viewEmployee__main__general__employee}>
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

				<div className={styles.viewEmployee__actions}>
					{isEditing ? (
						<button
							className={
								styles.viewEmployee__actions__btn +
								" " +
								styles["viewEmployee__actions__btn--cancel"]
							}
							onClick={handleCancelEdit}
						>
							Retour
						</button>
					) : (
						<button
							className={
								styles.viewEmployee__actions__btn +
								" " +
								styles["viewEmployee__actions__btn--modif"]
							}
							onClick={() => handleEditClick(selectedEmployee.id)}
						>
							Modifier
						</button>
					)}
				</div>
			</main>
		</div>
	);
}
