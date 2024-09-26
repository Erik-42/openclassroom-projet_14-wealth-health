import "react";
import styles from "./mainLeftBottom.module.scss";
import logoLeft from "../../assets/img/logo/logoAccueil.webp";

export default function MainLeftBottom() {
	return (
		<div className={styles.mainLeftBottom}>
			<div className={styles.mainLeftBottom__container}>
				<img
					className={styles.mainLeftBottom__container__img}
					src={logoLeft}
					alt="Wealth Health left logo"
				/>
				<div className={styles.mainLeftBottom__container__text}>
					<h2 className={styles.mainLeftBottom__container__text__subtitle}>
						Wealth<br></br> Health
					</h2>
					<h3 className={styles.mainLeftBottom__container__text__slogan}>
						Personal<br></br> management
					</h3>
				</div>
			</div>
		</div>
	);
}
