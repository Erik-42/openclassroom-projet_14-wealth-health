import "react";
import styled from "./mainLeftBottom.module.scss";
import logoLeft from "../../assets/img/logo/logoAccueil.svg";

export default function MainLeftBottom() {
	return (
		<div className={styled.mainLeftBottom}>
			<div className={styled.mainLeftBottom__container}>
				<img
					className={styled.mainLeftBottom__container__img}
					src={logoLeft}
					alt="Wealth Health logo"
				/>
				<div className={styled.mainLeftBottom__container__text}>
					<h2 className={styled.mainLeftBottom__container__text__subtitle}>
						Wealth<br></br> Health
					</h2>
					<h3 className={styled.mainLeftBottom__container__text__slogan}>
						Personal<br></br> management
					</h3>
				</div>
			</div>
		</div>
	);
}
