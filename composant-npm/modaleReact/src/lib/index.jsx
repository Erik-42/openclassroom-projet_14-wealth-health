import React, { useState } from "react";
import Modale from "./components/modale/modale";

export default function ModaleReact({ greetee }) {
	// const { greetee = "Erik-42" } = props;
	const [isShow, setIsShow] = useState(false);
	const toogleModal = () => setIsShow(!isShow);
	return (
		<div>
			<div>Modale React, {greetee}</div>
			<Modale
				showModale={isShow}
				closeModale={toogleModal}
				message="Modale de test"
			/>
			<button onClick={toogleModal}>Afficher</button>
		</div>
	);
}
