/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
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
          paths: {
            '@ghs-pictogram/core': ['../core/src/index.ts'],
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    '^@ghs-pictogram/core$': '<rootDir>/../core/src/index.ts',
  },
};

module.exports = config;
