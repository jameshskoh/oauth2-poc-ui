import App from "./App.tsx";
import { expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render hello world", () => {
    render(<App />);
    expect(screen.getByText(/hello world/i));
  });
});
