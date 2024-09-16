import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slice/tokenSlice";
import userReducer from "./slice/userSlice";
import employeeReducer from "./slice/employeeSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
	reducer: {
		token: tokenReducer,
		user: userReducer,
		employee: employeeReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
