import { useSelector } from "react-redux";
import styles from "./employeeInfo.module.scss";
import defaultAvatar from "../../assets/img/avatar/H2G2-Grok-only.svg";

// Function qui génère les champs
// eslint-disable-next-line react/prop-types
function InfoField({ label, value, type = "text", placeholder = "" }) {
	return (
		<div className={styles.employeeInfo__field}>
			<label className={styles.employeeInfo__label}>{label}</label>
			<input
				type={type}
				value={value}
				disabled
				placeholder={placeholder}
				className={styles.employeeInfo__input}
			/>
		</div>
	);
}

export default function EmployeeInfo() {
	const selectedEmployee = useSelector(
		(state) => state.employee.selectedEmployee
	);

	if (!selectedEmployee) {
		return <p>No employee selected</p>;
	}

	return (
		<div className={styles.employeeInfo}>
			<div className={styles.employeeInfo__infos}>
				<div className={styles.employeeInfo__generalInfos}>
					<h3 className={styles.employeeInfo__title}>General Information</h3>
					<div className={styles.employeeInfo__infoGroup}>
						<div className={styles.employeeInfo__avatar}>
							<img
								src={selectedEmployee.avatar || defaultAvatar}
								alt="Employee Avatar"
							/>
						</div>

						<InfoField label="First Name" value={selectedEmployee.firstName} />
						<InfoField label="Last Name" value={selectedEmployee.lastName} />
						<InfoField
							label="Birthday"
							value={selectedEmployee.birthday}
							type="date"
						/>
					</div>
				</div>

				<div className={styles.employeeInfo__addressInfo}>
					<h3 className={styles.employeeInfo__title}>Address Information</h3>
					<div className={styles.employeeInfo__infoGroup}>
						<InfoField label="Street" value={selectedEmployee.street} />
						<InfoField label="City" value={selectedEmployee.city} />
						<InfoField label="State" value={selectedEmployee.state} />
						<InfoField label="Zip Code" value={selectedEmployee.zipCode} />
						<InfoField label="Country" value={selectedEmployee.country} />
					</div>
				</div>

				<div className={styles.employeeInfo__workInfo}>
					<h3 className={styles.employeeInfo__title}>Work Information</h3>
					<div className={styles.employeeInfo__infoGroup}>
						<InfoField label="Department" value={selectedEmployee.department} />
						<InfoField label="Function" value={selectedEmployee.function} />
						<InfoField
							label="Start Work"
							value={selectedEmployee.startWork}
							type="date"
						/>
						<InfoField
							label="End Work"
							value={selectedEmployee.endWork}
							type="date"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
