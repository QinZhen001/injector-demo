import path from "path";
import dts from "rollup-plugin-dts";

const input = path.resolve(__dirname, "../dist/types/index.d.ts");
const outFile = path.resolve(__dirname, "../dist/index.d.ts");

const config = [
  {
    input,
    output: [{ file: outFile, format: "es" }],
    plugins: [dts()],
  },
];

export default config;
