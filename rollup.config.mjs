import commonjs from "@rollup/plugin-commonjs";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { glob } from "glob";

const inputFiles = glob.sync("src/library/components/Button/index.ts");
console.log(inputFiles);
//
export default [
  {
    input: "src/library/components/index.ts",
    output: {
      dir: "components",
      format: "es",
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.v1.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
    ],
  },
  {
    input: "src/library/v2/components/index.ts",
    output: {
      dir: "components/v2",
      format: "es",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.v2.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
  },
  {
    input: "src/library/v3/components/index.ts",
    output: {
      dir: "components/v3",
      format: "es",
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.v3.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
  },
];
