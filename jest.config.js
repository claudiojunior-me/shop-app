/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-useless-escape */
module.exports = {
  preset: 'jest-expo',
  testRegex: '(test|spec)\.[jt]sx?$',
  coverageThreshold: {
    global: {
      'branches': 80,
      'functions': 80,
      'lines': 80,
      'statements': 80
    }
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  modulePaths: [
    '<rootDir>',
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}