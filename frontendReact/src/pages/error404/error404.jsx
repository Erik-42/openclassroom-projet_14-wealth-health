import React from "react";
import styled from "./error404.module.scss";
import logo404 from "../../assets/img/error404/logo404.svg";

export default function Error404() {
	return (
		<div className={styled.error404}>
			<h1>
				<img src={logo404} alt="Error 404" className={styled.error404__logo} />
			</h1>
			<p className={styled.error404__text}>
				Oops! Vous êtes perdu. Cette page n'existe pas!
			</p>
			<a href="/" className={styled.homeLink}>
				Retour à l'accueil
			</a>
		</div>
	);
}
