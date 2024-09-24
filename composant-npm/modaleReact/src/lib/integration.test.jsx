import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, afterEach } from "vitest";
import ModaleReact from "./index";

describe("Integration test", () => {
	afterEach(() => {
		cleanup();
	});

	// it("Minimal render displays default greetee", () => {
	// Tester avec la valeur par défaut de 'greetee'
	// 	render(<ModaleReact />);
	// 	expect(
	// 		screen.getByText("Modale React, "),
	// 		"Erreur de rendu par default de greetee"
	// 	).toBeTruthy();
	// });

	it("Expected greetee is displayed", () => {
		// Tester avec une valeur personnalisée de 'greetee'
		const greetee = "Erik-42";
		render(<ModaleReact greetee={greetee} />);
		expect(screen.getByText(`Modale React, ${greetee}`)).toBeTruthy();
	});
});
