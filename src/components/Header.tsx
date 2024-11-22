"use client";

import { useEffect, useState } from "react";

const Header = () => {
  const [hash, setHash] = useState<string>();

  useEffect(() => {
    setHash(window.location.hash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="flex justify-center sm:justify-between items-center h-16 sticky top-0 z-10 bg-background border-b border-border">
      <h1 className="hidden sm:block">
        <a href="mailto:nick.gonzalez@3pillarglobal.com">
          nick.gonzalez@3pillarglobal.com
        </a>
      </h1>

      <nav>
        <ul className="flex justify-evenly gap-3">
          <li>
            <a
              href="#about"
              className={`header-link ${
                hash === "#about" ? "header-link_active" : ""
              }`}
            >
              #about
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`header-link ${
                hash === "#skills" ? "header-link_active" : ""
              }`}
            >
              #skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`header-link ${
                hash === "#projects" ? "header-link_active" : ""
              }`}
            >
              #projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
