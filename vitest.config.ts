import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      name: "happy-dom",
      root: "./app",
      environment: "happy-dom",
    },
  })
);
