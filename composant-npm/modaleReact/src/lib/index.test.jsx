import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ModaleReact from "./index";

describe("ModaleReact", () => {
	// Test du rendu sans props
	test("Le composant ModaleReact se rend correctement sans props", () => {
		render(<ModaleReact />);
		const modaleElement = screen.getByRole("dialog");
		expect(modaleElement).toBeInTheDocument();
	});

	// Test de la prop greetee
	test("La prop greetee fonctionne correctement", () => {
		render(<ModaleReact greetee="Erik-42" />);
		const greeteeText = screen.getByText(/Erik-42/i);
		expect(greeteeText).toBeInTheDocument();
	});

	// Test avec les paramètres de la modale
	test("ModaleReact fonctionne avec les paramètres de la modale", () => {
		render(
			<ModaleReact
				id="testModale"
				showModale={true}
				closeModale={() => {}}
				parameter={{ backgroundColor: "red" }}
				message="Message de test"
			/>
		);
		const modaleElement = screen.getByRole("dialog");
		expect(modaleElement).toBeInTheDocument();
		expect(modaleElement).toHaveStyle({ backgroundColor: "red" });
		const messageElement = screen.getByText("Message de test");
		expect(messageElement).toBeInTheDocument();
	});

	// Test supplémentaire pour les interactions ou comportements
	test("Ouverture de la modal et affichage du message", () => {
		render(
			<ModaleReact
				id="testModale"
				showModale={true}
				closeModale={() => {}}
				parameter={{ backgroundColor: "red" }}
				message="Message de test"
			/>
		);
		const modaleElement = screen.getByRole("dialog");
		expect(modaleElement).toBeInTheDocument();
		expect(modaleElement).toHaveStyle({ backgroundColor: "red" });
		const messageElement = screen.getByText("Message de test");
		expect(messageElement).toBeInTheDocument();
	});
});
