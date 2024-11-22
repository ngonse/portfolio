import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header Component", () => {
  beforeEach(() => {
    window.location.hash = "";
  });

  it("renders the header component", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("displays the email link", () => {
    render(<Header />);

    const emailLink = screen.getByText("nick.gonzalez@3pillarglobal.com");

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:nick.gonzalez@3pillarglobal.com"
    );
  });

  it("renders navigation links", () => {
    render(<Header />);

    expect(screen.getByText("#about")).toBeInTheDocument();
    expect(screen.getByText("#skills")).toBeInTheDocument();
    expect(screen.getByText("#projects")).toBeInTheDocument();
  });

  it("updates active link on hash change", () => {
    render(<Header />);

    window.location.hash = "#about";
    fireEvent(window, new HashChangeEvent("hashchange"));

    expect(screen.getByText("#about")).toHaveClass("header-link_active");
    expect(screen.getByText("#skills")).not.toHaveClass("header-link_active");
    expect(screen.getByText("#projects")).not.toHaveClass("header-link_active");

    window.location.hash = "#skills";
    fireEvent(window, new HashChangeEvent("hashchange"));

    expect(screen.getByText("#about")).not.toHaveClass("header-link_active");
    expect(screen.getByText("#skills")).toHaveClass("header-link_active");
    expect(screen.getByText("#projects")).not.toHaveClass("header-link_active");
  });

  it("applies correct styling to active link", () => {
    window.location.hash = "#projects";
    render(<Header />);

    expect(screen.getByText("#about")).not.toHaveClass("header-link_active");
    expect(screen.getByText("#skills")).not.toHaveClass("header-link_active");
    expect(screen.getByText("#projects")).toHaveClass("header-link_active");
  });

  it("removes event listener on unmount", () => {
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
    const { unmount } = render(<Header />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "hashchange",
      expect.any(Function)
    );
  });
});
