import { render, screen } from "@testing-library/react";
import Skills from "@/components/Skills";
import { JSX, ClassAttributes, ImgHTMLAttributes } from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>
  ) => {
    return <img {...props} />;
  },
}));

describe("Skills Component", () => {
  const skillsData = [
    { name: "JS", icon: "/skills/javascript.svg" },
    { name: "TS", icon: "/skills/typescript.svg" },
    { name: "NodeJS", icon: "/skills/nodejs.svg" },
    { name: "NextJS", icon: "/skills/nextjs.svg" },
    { name: "React", icon: "/skills/react.svg" },
    { name: "GraphQL", icon: "/skills/graphql.svg" },
    { name: "CSS", icon: "/skills/css.svg" },
    { name: "HTML", icon: "/skills/html5.svg" },
    { name: "Dart", icon: "/skills/dart.svg" },
    { name: "PHP", icon: "/skills/php.svg" },
    { name: "TailwindCSS", icon: "/skills/tailwindcss.svg" },
  ];

  test.each(skillsData)(
    "renders %s skill with the correct icon",
    ({ name, icon }) => {
      render(<Skills />);

      const skillIcon = screen.getByAltText(name);

      expect(skillIcon).toBeInTheDocument();
      expect(skillIcon).toHaveAttribute("src", icon);
    }
  );
});
