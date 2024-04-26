// jest.config.js
module.exports = {
    testEnvironment: 'node', // Specifies the environment in which the test should run
    setupFilesAfterEnv: ['<rootDir>/src/setUpTests.js'], // Load some setup code for setting globals or configuring libraries
    testMatch: [
        '**/__tests__/**/*.js?(x)', // Looks for any files inside __tests__ folders that end with .js or .jsx
        '**/?(*.)+(spec|test).js?(x)' // Looks for any files ending in .test.js, .test.jsx, .spec.js, or .spec.jsx
    ],
    testPathIgnorePatterns: ['/node_modules/'], // Ignore tests from node_modules or any specified path
    verbose: true, // Display individual test results with the test suite hierarchy.
};
