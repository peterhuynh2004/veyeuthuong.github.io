import { render, screen } from "@testing-library/react";
import Logo from "./components/Logo";
import ListVe from "./components/ListVe";

test("renders learn react link", () => {
    render(<Logo />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
