module.exports = {
  "testURL": "http://localhost/",
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "^~(.*)$": "<rootDir>/src/$1"
  },
  "setupTestFrameworkScriptFile": "<rootDir>/setupTests.ts"
}
