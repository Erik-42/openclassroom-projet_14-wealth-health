import { createSlice } from "@reduxjs/toolkit";
import mockEmployee from "../../mock/data/mockEmployees";

const initialState = {
	employeeList: mockEmployee,
	selectedEmployee: null,
};

const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		addEmployee: (state, action) => {
			state.employeeList.push(action.payload);
		},
		selectEmployee: (state, action) => {
			state.selectedEmployee = state.employeeList.find(
				(employee) => employee.id === action.payload
			);
		},
		setEmployeeList: (state, action) => {
			state.employeeList = action.payload;
		},
		clearSelectedEmployee: (state) => {
			state.selectedEmployee = null;
		},
	},
});

export const {
	addEmployee,
	selectEmployee,
	setEmployeeList,
	clearSelectedEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
