module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    //setupFiles: ['dotenv/config'],
    testMatch: ["**/**/*.test.ts"],
    verbose: true,
    forceExit: true,
    //clearMocks: true
  };