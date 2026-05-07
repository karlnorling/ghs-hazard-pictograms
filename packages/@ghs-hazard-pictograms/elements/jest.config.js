/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: {
          esModuleInterop: true,
          skipLibCheck: true,
          lib: ['ES2022', 'DOM'],
        },
      },
    ],
  },
  moduleNameMapper: {
    '^@ghs-hazard-pictograms/core$': '<rootDir>/../core/src/index.ts',
  },
};

module.exports = config;
