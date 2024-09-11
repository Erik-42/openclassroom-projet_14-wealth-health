import React from "react";
import styled from "./home.module.scss";
import MainAccueil from "../../layouts/mainAccueil/mainAccueil";
import MainRightBottom from "../../layouts/mainRightBottom/mainRightBottom";
import MainLeftBottom from "../../layouts/mainLeftBottom/mainLeftBottom";

export default function Home() {
	return (
		<div className={styled.home}>
			<MainAccueil className={styled.home__mainAccueil} />

			<div className={styled.home__bottomSection}>
				<MainLeftBottom className={styled.home__mainLeftBottom} />
				<MainRightBottom className={styled.home__mainRightBottom} />
			</div>
		</div>
	);
}
