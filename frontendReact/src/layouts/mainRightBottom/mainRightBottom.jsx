import "react";
import styled from "./mainRightBottom.module.scss";
import logoRight from "../../assets/img/logo/logoAccueil.svg";

export default function MainRightBottom() {
	return (
		<div className={styled.mainRightBottom}>
			<div className={styled.mainRightBottom__container}>
				<img
					className={styled.mainRightBottom__container__img}
					src={logoRight}
					alt="Wealth Health logo"
				/>
				<div className={styled.mainRightBottom__container__text}>
					<h2 className={styled.mainRightBottom__container__text__subtitle}>
						Wealth<br></br> Health
					</h2>
					<h3 className={styled.mainRightBottom__container__text__slogan}>
						Personal<br></br> management
					</h3>
				</div>
			</div>
		</div>
	);
}
