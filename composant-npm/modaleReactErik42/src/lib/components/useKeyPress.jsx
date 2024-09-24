import { useEffect } from "react";

export default function UseKeyPress(key, action) {
	useEffect(() => {
		const onKeyUp = (e) => {
			if (e.key === key) action();
		};
		window.addEventListener("keyup", onKeyUp);

		return () => window.removeEventListener("keyup", onKeyUp);
	}, [action, key]);
}
