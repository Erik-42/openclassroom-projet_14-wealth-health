import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import ModaleReactErik42 from "./index";
import ModaleErik42 from "./components/modaleErik42/modaleErik42";

describe("ModaleReact", () => {
	afterEach(() => {
		cleanup();
	});
	// Test du rendu sans props
	test("Le composant ModaleReact se rend correctement sans props", () => {
		render(<ModaleErik42 showModale={true} />);
		const modaleElement = screen.getByTestId("modal");
		expect(modaleElement).toBeTruthy();
	});
	// Test de la prop greetee
	test("La prop greetee fonctionne correctement", () => {
		render(<ModaleReactErik42 greetee="Erik-42" />);
		const greeteeText = screen.getByText(/Erik-42/i);
		expect(greeteeText).toBeTruthy();
	});
	// Test avec les paramètres de la modale
	test("ModaleReact fonctionne avec les paramètres de la modale", async () => {
		render(
			<ModaleErik42
				id="testModale"
				showModale={true}
				closeModale={() => {}}
				parameter={{ backgroundColor: "red" }}
				message="Message de test"
			/>
		);

		const modaleElement = screen.getByTestId("modal");
		expect(modaleElement).toBeTruthy();
		const messageElement = screen.getByText(/Message de test/i);
		expect(messageElement).toBeTruthy();
	});
	// Test supplémentaire pour les interactions ou comportements
	test("Ouverture de la modal et affichage du message", () => {
		render(
			<ModaleErik42
				id="testModale"
				showModale={true}
				closeModale={() => {}}
				parameter={{ backgroundColor: "red" }}
				message="Message de test"
			/>
		);
		const modaleElement = screen.getByTestId("modal");
		expect(modaleElement).toBeTruthy();
		const messageElement = screen.getAllByText(/Message de test/i);
		expect(messageElement).toBeTruthy();
	});
});
