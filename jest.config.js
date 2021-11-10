module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/__tests__/**/**'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.vscode/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.tsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.css$': '<rootDir>/tests/__mocks__/styles.js',
    '^.+\\.(png|gif|svg|jpeg|jpg|mp4|mpeg)$':
      '<rootDir>/tests/__mocks__/staticassets.js'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  moduleDirectories: ['node_modules', 'src', 'tests'],
  moduleNameMapper: {
    '^@utils(.*)$': ['<rootDir>/src/urls$1'],
    '^@hooks(.*)$': ['<rootDir>/src/hooks$1']
  }
};
