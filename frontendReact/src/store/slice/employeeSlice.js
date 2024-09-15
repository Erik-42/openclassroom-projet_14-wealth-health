import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	employee: {
		firstName: "",
		lastName: "",
		birthday: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
		country: "",
		department: "",
		function: "",
		startWork: "",
		endWork: "",
		avatar: "",
	},
};

const employeeSlice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		addEmployee(state, action) {
			state.employee = action.payload;
		},
		resetEmployee(state) {
			state.employee = initialState.employee;
		},
	},
});

export const { addEmployee, resetEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
