import { render, screen } from "@testing-library/react";
import About from "@/components/About";

describe("About Component", () => {
  it("renders the About section with an image and content", () => {
    render(<About />);

    const section = screen.getByRole("region", { name: /about/i });
    expect(section).toBeInTheDocument();

    const image = screen.getByRole("img", { name: /nick gonzález/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fme.jpg&w=640&q=75"
    );
    expect(image).toHaveAttribute("alt", "Nick González");

    const heading = screen.getByRole("heading", {
      name: /hi, i'm nick gonzález/i,
    });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(
      /i'm a software engineer with a passion for javascript and mobile development/i
    );
    expect(paragraph).toBeInTheDocument();
  });
});
