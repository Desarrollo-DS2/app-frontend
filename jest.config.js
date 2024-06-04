const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
})

const config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/app/_providers/',
    '<rootDir>/app/_api/',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/app/_providers/',
    '<rootDir>/app/_api/',
  ],
}

module.exports = createJestConfig(config)
