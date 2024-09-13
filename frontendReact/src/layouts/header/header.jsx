import React from "react";
import { Link } from "react-router-dom";
import styled from "./header.module.scss";
import logo from "../../assets/img/logo/logo-wealthhealth-nobackground.svg";
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

					<div className={styled.nav__connect}>
						{/* //deviens deconnexion si connecté */}

						<Link className={styled.nav__connect__button} to="/login">
							<p>Connexion</p>
						</Link>
						{/* //visible uniquement si connexion */}
						<Link className={styled.nav__connect__btnList} to="/employeeList">
							<p>List employees</p>
						</Link>
						<Link className={styled.nav__connect__btnView} to="/viewEmployee">
							<p>View employee</p>
						</Link>
						<Link
							className={styled.nav__connect__btnCreate}
							to="/createEmployee"
						>
							<p>Create employee</p>
						</Link>
						{/* //visible uniquement si connexion */}
					</div>
				</nav>
			</header>
		</>
	);
}
