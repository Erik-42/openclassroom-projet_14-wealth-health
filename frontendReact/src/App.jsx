import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/root.module.scss";
import Home from "./pages/home/home";
import Error404 from "./pages/error404/error404";
import Login from "./pages/login/login";
import ViewEmployee from "./pages/viewEmployee/viewEmployee";
import Header from "./layouts/header/header";
import ListEmployees from "./components/listEmployees/listEmployees";
import CreateEmployee from "./components/createEmployee/createEmployee";
import ConnectedRoute from "./utils/connectedRoutes/connectedRoute";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />

				<Route path="/listEmployees" element={<ListEmployees />} />
				<Route path="/viewEmployee" element={<ViewEmployee />} />
				<Route path="/createEmployee" element={<CreateEmployee />} />
				<Route
					path=""
					element={
						<ConnectedRoute>
							{/* <ListEmployees />
							<ViewEmployee />
							<CreateEmployee /> */}
						</ConnectedRoute>
					}
				/>
				<Route path="*" element={<Error404 />} />
			</Routes>

			{/* SpeedInsights pour monitorer les performances avec Vercel */}
			<SpeedInsights />
		</BrowserRouter>
	);
}
