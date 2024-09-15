import PropTypes from "prop-types";
import styled from "./EmployeeInfo.module.scss";
import defaultAvatar from "../../assets/img/avatar/H2G2-Grok-only.svg";
// import defaultAvatar from "../../assets/img/avatar/head-Grok-only.svg";

const EmployeeInfo = ({ employee }) => {
	return (
		<div className={styled.employeeInfo}>
			<div className={styled.infos}>
				<div className={styled.generalInfos}>
					<h3>General Information</h3>
					<div className={styled.infoGroup}>
						<div className={styled.avatar}>
							<img
								src={employee.avatar || defaultAvatar}
								alt="Employee Avatar"
							/>
						</div>

						<div>
							<label>First Name</label>
							<input
								type="text"
								value={employee.firstName}
								disabled
								placeholder="John"
							/>
						</div>

						<div>
							<label>Last Name</label>
							<input
								type="text"
								value={employee.lastName}
								disabled
								placeholder="Doe"
							/>
						</div>

						<div>
							<label>Birthday</label>
							<input
								type="date"
								value={employee.birthday}
								disabled
								placeholder="1990-01-01"
							/>
						</div>
					</div>
				</div>

				<div className={styled.addressInfo}>
					<h3>Address Information</h3>
					<div className={styled.infoGroup}>
						<div>
							<label>Street</label>
							<input
								type="text"
								value={employee.street}
								disabled
								placeholder="123 Main St"
							/>
						</div>

						<div>
							<label>City</label>
							<input
								type="text"
								value={employee.city}
								disabled
								placeholder="New York"
							/>
						</div>

						<div>
							<label>State</label>
							<input
								type="text"
								value={employee.state}
								disabled
								placeholder="NY"
							/>
						</div>

						<div>
							<label>Zip Code</label>
							<input
								type="text"
								value={employee.zipCode}
								disabled
								placeholder="10001"
							/>
						</div>

						<div>
							<label>Country</label>
							<input
								type="text"
								value={employee.country}
								disabled
								placeholder="United States"
							/>
						</div>
					</div>
				</div>

				<div className={styled.workInfo}>
					<h3>Work Information</h3>
					<div className={styled.infoGroup}>
						<div>
							<label>Department</label>
							<input
								type="text"
								value={employee.department}
								disabled
								placeholder="Engineering"
							/>
						</div>

						<div>
							<label>Function</label>
							<input
								type="text"
								value={employee.function}
								disabled
								placeholder="Software Engineer"
							/>
						</div>

						<div>
							<label>Start Work</label>
							<input
								type="date"
								value={employee.startWork}
								disabled
								placeholder="2022-01-01"
							/>
						</div>

						<div>
							<label>End Work</label>
							<input
								type="date"
								value={employee.endWork}
								disabled
								placeholder="2023-12-31"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

EmployeeInfo.propTypes = {
	employee: PropTypes.object.isRequired,
};

export default EmployeeInfo;
