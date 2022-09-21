import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render App Component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Ergeon Challange!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
