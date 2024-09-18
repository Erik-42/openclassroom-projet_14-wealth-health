import React from "react";
import ModaleReact from "./lib";
import styled from "styled-components";

function App() {
	return (
		<AppWrapper>
			<AppHeader>
				<p>Une modal réutilisable et paramétrable</p>
				<AppLink
					href="https://github.com/Erik-42/openclassroom-projet_14-wealthhealth"
					target="_blank"
					rel="noopener noreferrer"
				>
					Projet 14 - Faites passer une librairie jQuery vers React <br />
					Application Developer - JavaScript React - OpenClassRoom
				</AppLink>
				<ModaleReact greetee="Erik-42" />
			</AppHeader>
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	text-align: center;
`;

const AppHeader = styled.header`
	background-color: #282c34;
	min-height: 97vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const AppLink = styled.a`
	color: #61dafb;
	margin: 0 0 2rem 0;
`;
