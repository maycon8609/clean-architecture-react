module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@data/(.*)': ['<rootDir>/src/data/$1'],
    '@domain/(.*)': ['<rootDir>/src/domain/$1'],
    '@infra/(.*)': ['<rootDir>/src/infra/$1'],
    '@main/(.*)': ['<rootDir>/src/main/$1']
  }
}
