import "react";
import styles from "./mainRightBottom.module.scss";
import logoRight from "../../assets/img/logo/logoAccueil.webp";

export default function MainRightBottom() {
	return (
		<div className={styles.mainRightBottom}>
			<div className={styles.mainRightBottom__container}>
				<img
					className={styles.mainRightBottom__container__img}
					src={logoRight}
					alt="Wealth Health right logo"
				/>
				<div className={styles.mainRightBottom__container__text}>
					<h2 className={styles.mainRightBottom__container__text__subtitle}>
						Wealth<br></br> Health
					</h2>
					<h3 className={styles.mainRightBottom__container__text__slogan}>
						Personal<br></br> management
					</h3>
				</div>
			</div>
		</div>
	);
}
