import React from "react";
import styled from "./home.module.scss";
import wealthhealthLogo from "../../assets/img/logo/logo-wealthhealth.webp";

export default function Home() {
	return (
		<div className={styled.home}>
			<h2 className={styled.home__subtitle}>Gestion des dossiers du personnel</h2>

			<img
				className={styled.home__img}
				src={wealthhealthLogo}
				alt={wealthhealthLogo}
			/>
		</div>
	);
}
