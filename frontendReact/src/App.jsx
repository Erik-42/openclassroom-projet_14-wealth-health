import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/root.module.scss";
import Home from "./pages/home/home";
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import Error404 from "./pages/error404/error404";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
			<SpeedInsights />
		</BrowserRouter>
	);
}
