import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";
import ModaleReact from "./index";

describe("ModaleReact", () => {
	// Test du rendu sans props
	test("Le composant ModaleReact se rend correctement sans props", () => {
		const component = renderer.create(<ModaleReact />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	// Test de la prop greetee
	test("La prop greetee fonctionne correctement", () => {
		const component = renderer.create(<ModaleReact greetee="Erik-42" />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	// Test avec les paramètres de la modale
	test("ModaleReact fonctionne avec les paramètres de la modale", () => {
		const component = renderer.create(
			<ModaleReact
				id="testModale"
				showModale={true}
				closeModale={() => {}}
				parameter={{ backgroundColor: "red" }}
				message="Message de test"
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	// Additional tests for interactions or behavior
	test("Ouverture de la modal et affichage du message", () => {
		const component = renderer.create(
			<ModaleReact
				id="testModale"
				showModale={true}
				closeModale={() => {}}
				parameter={{ backgroundColor: "red" }}
				message="Message de test"
			/>
		);
		const instance = component.root;
		expect(instance.findByProps({ id: "testModale" })).not.toBeNull();
		expect(
			instance.findByProps({ style: { backgroundColor: "red" } })
		).not.toBeNull();
		expect(instance.findByType("p").children).toEqual(["Message de test"]);
	});
});
