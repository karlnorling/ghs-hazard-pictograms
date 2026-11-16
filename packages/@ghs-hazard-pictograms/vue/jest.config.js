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
          types: ['jest'],
          skipLibCheck: true,
        },
      },
    ],
  },
  moduleNameMapper: {
    // Source imports end in .js so the ESM build runs in Node; point them back at the .ts files.
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@ghs-hazard-pictograms/core$': '<rootDir>/../core/src/index.ts',
  },
};

module.exports = config;
