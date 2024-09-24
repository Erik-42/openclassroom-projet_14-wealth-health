import React from "react";
import close from "../assets/close.svg";
import { Content, IMG, ModalContent, ModalDiv } from "../styles/modaleStyle";
import UseKeyPress from "../useKeyPress";
import "./modale.scss";

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
			<ModalDiv data-testid="modal" style={parameter} onClick={closeModale}>
				<ModalContent>
					<span style={{ color: "red" }}>
						{message} Employé créé avec succés
					</span>
					<IMG src={close} alt="close" onClick={closeModale} />

					{/* <div className="modale" id={id} style={parameter}>
						<div className="modale__content">
							<span
								className="modale__content__iconClose"
								onClick={closeModale}
							>
								<IMG src={close} alt="close" />
							</span>
						</div>
					</div> */}
				</ModalContent>
			</ModalDiv>
		</>
	);
}
