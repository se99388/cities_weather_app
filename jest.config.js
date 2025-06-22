// const { createDefaultPreset } = require("ts-jest");

// const tsJestTransformCfg = createDefaultPreset().transform;

// /** @type {import("jest").Config} **/
// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     ...tsJestTransformCfg,
//   },
// };

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest", // ← this wires the transformer automatically
  testEnvironment: "node",
  // optional: tell Jest which files are tests
  testMatch: ["**/?(*.)+(test|spec).[tj]s?(x)"],
};
