module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts)?$': 'ts-jest',
    '^.+\\.(js)$': 'babel-jest',
  },
};
