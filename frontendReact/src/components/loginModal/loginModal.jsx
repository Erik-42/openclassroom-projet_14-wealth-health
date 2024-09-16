import styled from "./loginModal.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/slice/tokenSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/loader/loader";

export default function LoginModal() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log(setErrorMessage);
	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			dispatch(setToken(storedToken));
		}
	}, [dispatch]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => {
			const fakeToken = "fake-token";
			dispatch(setToken(fakeToken));

			if (rememberMe) {
				localStorage.setItem("token", fakeToken);
			}

			navigate("/viewEmployee");
			setLoading(false);
		}, 1000);
	};

	return (
		<>
			{loading && <Loader />}
			<section className={styled.login}>
				<i className={`fa fa-user-circle ${styled.login__icon}`}></i>
				<h1>Sign In</h1>

				{errorMessage && (
					<div className={styled.login__errorMessage}>{errorMessage}</div>
				)}

				<form className={styled.login__form} onSubmit={handleSubmit}>
					<div className={styled.login__form__wrapper}>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							required
							value={login}
							onChange={(e) => setLogin(e.target.value)}
						/>
					</div>
					<div className={styled.login__form__wrapper}>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							name="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className={styled.login__form__remember}>
						<input
							id="rememberMe"
							type="checkbox"
							name="persistent"
							checked={rememberMe}
							onChange={(e) => setRememberMe(e.target.checked)}
						/>
						<label htmlFor="rememberMe">Remember me</label>
					</div>

					<button type="submit" className={styled.login__button}>
						Sign In
					</button>
				</form>
			</section>
		</>
	);
}
