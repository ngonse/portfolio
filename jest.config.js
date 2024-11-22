// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/.next/**",
    "!**/jest.setup.js",
    "!**/next.config.js",
    "!**/next.config.ts ",
    "!**/tailwind.config.ts",
  ],
  coverageDirectory: "coverage",
};

module.exports = createJestConfig(customJestConfig);
