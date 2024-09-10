import React from "react";
import { Link } from "react-router-dom";
import styled from "./header.module.scss";
import logo from "../../assets/img/logo/logo-wealthhealth0.webp";
import Loader from "../../utils/loader/loader";

export default function Header({ loading }) {
	return (
		<>
			{loading && <Loader />}
			<header className={styled.header}>
				<nav className={styled.nav}>
					<Link className={styled.nav__logo} to="/">
						<img
							className={styled.nav__logo__image}
							src={logo}
							alt="Wealth Health Logo"
						/>
					</Link>
					<h1 className={styled.nav__title}>HR-Net</h1>
				</nav>
			</header>
		</>
	);
}
