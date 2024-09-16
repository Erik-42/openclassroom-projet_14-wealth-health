import "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployee } from "../slice/employeeSlice";
import { mockEmployee } from "../mockData";

const EmployeeTest = () => {
	const dispatch = useDispatch();
	const employee = useSelector((state) => state.employee.employee);

	const handleLoadMockData = () => {
		dispatch(setEmployee(mockEmployee));
	};

	return (
		<div>
			<h2>Employee Information</h2>
			<button onClick={handleLoadMockData}>Load Mock Data</button>
			<div>
				<p>
					Name: {employee.firstName} {employee.lastName}
				</p>
				<p>Birthday: {employee.birthday}</p>
			</div>
		</div>
	);
};

export default EmployeeTest;
