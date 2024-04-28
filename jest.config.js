// jest.config.js
module.exports = {
    testEnvironment: 'node', 
    setupFilesAfterEnv: ['<rootDir>/src/setUpTests.js'], 
    testMatch: [
        '**/__tests__/**/*.js?(x)', // Looks for any files inside __tests__ folders that end with .js or .jsx
        '**/?(*.)+(spec|test).js?(x)' // Looks for any files ending in 
    ],
    testPathIgnorePatterns: ['/node_modules/'], //Ignore tests from node_modules or any specified path
    verbose: true, //Display individual test results with the test suite hierarchy.
};
