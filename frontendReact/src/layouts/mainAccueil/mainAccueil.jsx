import "react";
import styles from "./mainAccueil.module.scss";
import logoAccueil from "../../assets/img/logo/logoAccueil.webp";

export default function MainAccueil() {
	return (
		<div className={styles.mainAccueil}>
			<img
				className={styles.mainAccueil__img}
				src={logoAccueil}
				alt="Wealth Health accueil logo"
			/>
			<h2 className={styles.mainAccueil__subtitle}>Wealth Health</h2>
			<h3 className={styles.mainAccueil__slogan}>Personal management</h3>
		</div>
	);
}
