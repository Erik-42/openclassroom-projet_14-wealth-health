import "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";
import ModaleReact from "./index";

describe("ModaleReact", () => {
	test("ModaleReact component renders correctly", () => {
		const component = renderer.create(<ModaleReact />);

		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});

	test("The greetee prop works", () => {
		const component = renderer.create(<ModaleReact greetee={"Universe"} />);

		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
