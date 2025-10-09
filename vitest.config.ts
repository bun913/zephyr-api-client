import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/tools/**",
      "**/*.config.*",
    ],
    coverage: {
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/tools/**",
        "**/*.test.ts",
        "**/*.config.*",
        "**/test-api.ts",
        "**/data-contracts.ts",
      ],
    },
  },
});
