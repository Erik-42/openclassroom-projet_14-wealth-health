import React from "react";
import close from "../assets/close.svg";
import { Content, IMG, ModalContent, ModalDiv } from "../styles/modaleStyle";
import UseKeyPress from "../useKeyPress";
import "./modale.scss";

export default function Modale({
	id,
	showModale,
	closeModale,
	parameter,
	message,
}) {
	// Utiliser la touche "Escape" pour fermer la modale
	UseKeyPress("Escape", closeModale);

	// Si `showModale` est faux, on ne rend rien
	if (!showModale) return null;

	return (
		<>
			<ModalDiv data-testid="modal" style={parameter} onClick={closeModale}>
				<ModalContent>
					<span style={{ color: "red" }}>{message} test de la modale Erik</span>
					<IMG src={close} alt="close" onClick={closeModale} />
					<section className={styles.login}>
						<i className={`fa fa-user-circle ${styles.login__icon}`}></i>
						<h1>Sign In</h1>

						{errorMessage && (
							<div className={styles.login__errorMessage}>{errorMessage}</div>
						)}

						<form className={styles.login__form} onSubmit={handleSubmit}>
							<div className={styles.login__form__wrapper}>
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
							<div className={styles.login__form__wrapper}>
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
							<div className={styles.login__form__remember}>
								<input
									id="rememberMe"
									type="checkbox"
									name="persistent"
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
								/>
								<label htmlFor="rememberMe">Remember me</label>
							</div>

							<button type="submit" className={styles.login__button}>
								Sign In
							</button>
						</form>
					</section>
					{/* <div className="modale" id={id} style={parameter}>
						<div className="modale__content">
							<span
								className="modale__content__iconClose"
								onClick={closeModale}
							>
								<IMG src={close} alt="close" />
							</span>
						</div>
					</div> */}
				</ModalContent>
			</ModalDiv>
		</>
	);
}
