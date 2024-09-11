import React from "react";
import styled from "./mainAccueil.module.scss";
import logoAccueil from "../../assets/img/logo/logoAccueil.svg";

export default function MainAccueil() {
	return (
		<div className={styled.mainAccueil}>
			<img
				className={styled.mainAccueil__img}
				src={logoAccueil}
				alt="Wealth Health logo"
			/>
			<h2 className={styled.mainAccueil__subtitle}>Wealth Health</h2>
			<h3 className={styled.mainAccueil__slogan}>Personal management</h3>
		</div>
	);
}
