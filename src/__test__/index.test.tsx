import { render } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders correctly", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
