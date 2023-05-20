const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
   dir: './',
});

const customJestConfig = {
   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
   moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
   modulePaths: ['<rootDir>'],
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/setupTests.js'],
   testEnvironment: 'jsdom',
};
module.exports = createJestConfig(customJestConfig);
