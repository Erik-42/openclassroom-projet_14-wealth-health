import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, afterEach } from "vitest";
import ModaleReactErik42 from "./index";

describe("Integration test", () => {
	afterEach(() => {
		cleanup();
	});

	it("Expected greetee is displayed", () => {
		// Tester avec une valeur personnalisée de 'greetee'
		const greetee = "Erik-42";
		render(<ModaleReactErik42 greetee={greetee} />);
		expect(screen.getByText(`Modale React, ${greetee}`)).toBeTruthy();
	});
});
