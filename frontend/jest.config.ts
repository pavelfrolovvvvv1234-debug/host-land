import type { Config } from "jest";

/**
 * Jest configuration enabling TypeScript support via ts-jest while keeping the
 * module resolution strategy aligned with Next.js conventions.
 *
 * Returns:
 *   Config: Strongly-typed Jest configuration object consumed by ts-jest.
 */
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"]
};

export default config;


