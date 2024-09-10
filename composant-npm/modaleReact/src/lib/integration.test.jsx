import "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, afterEach } from "vitest";
import ModaleReact from "./index";

describe("Integration test", () => {
	afterEach(() => {
		cleanup();
	});

	it("Minimal render displays expected text", () => {
		render(<ModaleReact />);
		expect(screen.getByText("Hello, World!")).toBeTruthy();
	});

	it("Expected greetee is displayed", () => {
		const greetee = "Universe";
		render(<ModaleReact greetee={greetee} />);
		expect(screen.getByText(`Hello, ${greetee}!`)).toBeTruthy();
	});
});
