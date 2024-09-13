import React from "react";
import PropTypes from "prop-types";
import styled from "./EmployeeInfo.module.scss";

const EmployeeInfo = ({ employee }) => {
	return (
		<div className={styled.employeeInfo}>
			<div className={styled.avatar}>
				<img src={employee.avatar} alt="Employee Avatar" />
			</div>
			<div className={styled.infos}>
				<div className={styled.generalInfos}>
					<div>
						<label>First Name</label>
						<input type="text" value={employee.firstName} disabled />
					</div>
					<div>
						<label>Last Name</label>
						<input type="text" value={employee.lastName} disabled />
					</div>
					<div>
						<label>Birthday</label>
						<input type="date" value={employee.birthday} disabled />
					</div>
				</div>
				<div className={styled.addressInfo}>
					<div>
						<label>Street</label>
						<input type="text" value={employee.street} disabled />
					</div>
					<div>
						<label>City</label>
						<input type="text" value={employee.city} disabled />
					</div>
					<div>
						<label>State</label>
						<input type="text" value={employee.state} disabled />
					</div>
					<div>
						<label>Zip Code</label>
						<input type="text" value={employee.zipCode} disabled />
					</div>
					<div>
						<label>Country</label>
						<input type="text" value={employee.country} disabled />
					</div>
				</div>
				<div className={styled.workInfo}>
					<div>
						<label>Department</label>
						<input type="text" value={employee.department} disabled />
					</div>
					<div>
						<label>Function</label>
						<input type="text" value={employee.function} disabled />
					</div>
					<div>
						<label>Start Work</label>
						<input type="date" value={employee.startWork} disabled />
					</div>
					<div>
						<label>End Work</label>
						<input type="date" value={employee.endWork} disabled />
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
