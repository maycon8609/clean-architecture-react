module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '@data/(.*)': ['<rootDir>/src/data/$1'],
    '@domain/(.*)': ['<rootDir>/src/domain/$1'],
    '@infra/(.*)': ['<rootDir>/src/infra/$1'],
    '@main/(.*)': ['<rootDir>/src/main/$1'],
    '@presentation/(.*)': ['<rootDir>/src/presentation/$1'],
    '\\.scss$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  }
}
