import React from "react";
import close from "../assets/close.svg";
import { IMG, ModalContent, ModalDiv } from "../styles/modaleErik42Style";
import UseKeyPress from "../useKeyPress";
import "./modaleErik42.scss";

export default function ModaleErik42({
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
			<ModalDiv data-testid="modal" style={parameter} onClick={closeModale}>
				<ModalContent>
					<span style={{ color: "red" }}>
						{message} Employé créé avec succés !
					</span>
					<IMG src={close} alt="close" onClick={closeModale} />
				</ModalContent>
			</ModalDiv>
		</>
	);
}
