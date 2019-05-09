const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'scss'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
