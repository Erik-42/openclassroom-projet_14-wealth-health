import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ConnectedRoute({ children }) {
	const token = useSelector((state) => state.token.token);
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) navigate("/login");
	}, []);
	return <>{children} </>;
}
