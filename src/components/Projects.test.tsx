import { render, screen } from "@testing-library/react";
import Projects from "@/components/Projects";

describe("Projects Component", () => {
  it("renders the projects section with correct heading", () => {
    render(<Projects />);

    const section = screen.getByRole("region", { name: /projects/i });
    expect(section).toBeInTheDocument();

    const heading = screen.getByRole("heading", { name: /# projects/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders all projects with correct data", () => {
    render(<Projects />);

    const projectTitles = [
      "Backcountry",
      "Full Focus",
      "iPro",
      "Feria de Artes Virtual 2020-2021",
      "Expo Pyme Virtual 2020",
      "tapchat",
      "Wordle Clone",
      "Connect 4",
      "Who's that Pokémon?",
    ];

    projectTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    const backcountryDescription = screen.getByText("NextJS.");
    const backcountryDate = screen.getAllByText("2020");

    expect(backcountryDescription).toBeInTheDocument();
    expect(backcountryDate).toHaveLength(4);
  });

  it("renders the correct SVG icon for web projects", () => {
    render(<Projects />);

    const webIcons = screen.getAllByTestId("web-icon");

    expect(webIcons).toHaveLength(7);
  });

  it("renders the correct SVG icon for mobile projects", () => {
    render(<Projects />);

    const mobileIcons = screen.getAllByTestId("mobile-icon");

    expect(mobileIcons).toHaveLength(2);
  });
});
