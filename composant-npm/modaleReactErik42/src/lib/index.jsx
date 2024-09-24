import React, { useState } from "react";
import ModaleErik42 from "./components/modaleErik42/modaleErik42";

export default function ModaleReact({ greetee }) {
	const [isShow, setIsShow] = useState(false);
	const toogleModal = () => setIsShow(!isShow);
	return (
		<div>
			<div>Modale React, {greetee}</div>
			<ModaleErik42 showModale={isShow} closeModale={toogleModal} />
			<button onClick={toogleModal}>Afficher</button>
		</div>
	);
}
