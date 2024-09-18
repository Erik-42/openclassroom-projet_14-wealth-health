import React from "react";
import Modale from "./components/modale/modale";

export default function ModaleReact({ greetee }) {
	return (
		<div>
			<div>Modale React, {greetee}</div>
			<Modale />
		</div>
	);
}
