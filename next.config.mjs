// @ts-check

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import("next").NextConfig} */
const config = {
  /** @see {@link https://nextjs.org/docs/app/building-your-application/styling/sass} */
  sassOptions: {
    implementation: "sass-embedded",
    includePaths: [join(__dirname, "src/styles")],
  },
  reactCompiler: true,
};

export default config;
