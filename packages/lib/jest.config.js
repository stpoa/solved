module.exports = {
  "testURL": "http://localhost/",
  "roots": [
    "<rootDir>"
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
    "^~(.*)$": "<rootDir>/$1"
  },
  "setupFilesAfterEnv": ["<rootDir>/setupTests.ts"]
}
