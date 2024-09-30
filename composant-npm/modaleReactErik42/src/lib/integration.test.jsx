import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, afterEach } from "vitest";
import ModaleErik42 from "./index";

describe("Integration test", () => {
  afterEach(() => {
    cleanup();
  });

  it("Expected greetee is displayed", () => {
    // Tester avec une valeur personnalisée de 'greetee'
    const greetee = "Erik-42";
    render(<ModaleErik42 greetee={greetee} />);
    expect(screen.getByText(`Modale React, ${greetee}`)).toBeTruthy();
  });
});
