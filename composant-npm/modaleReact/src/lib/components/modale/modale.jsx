import React from "react";
import close from "../assets/close.svg";
import { Content, IMG, ModalContent, ModalDiv } from "../styles/modaleStyle";
import UseKeyPress from "../useKeyPress";

export default function Modale({
	id,
	showModale,
	closeModale,
	parameter,
	message,
}) {
	// Utiliser la touche "Escape" pour fermer la modale
	UseKeyPress("Escape", closeModale);

	// Si `showModale` est faux, on ne rend rien
	if (!showModale) return null;

	return (
		<>
			<h1>Erik Modal React</h1>
			<ModalDiv style={parameter} onClick={closeModale}>
				<ModalContent>
					<Content>
						<span>{message}</span>
						<IMG src={close} alt="close" onClick={closeModale} />
					</Content>
					<div className="modale" id={id} style={parameter}>
						<div className="modale__content">
							<span className="modale__iconClose" onClick={closeModale}>
								<IMG src={close} alt="close" />
							</span>
						</div>
					</div>
				</ModalContent>
			</ModalDiv>
		</>
	);
}
