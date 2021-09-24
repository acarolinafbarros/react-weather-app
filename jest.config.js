/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  rootDir: "./",
  coverageReporters: ["cobertura", "text", "html", "json"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["**/*.{js}"],
  coverageThreshold: undefined,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["/node_modules/", "/src/components/Icons/*"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
