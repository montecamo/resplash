const path = require('path');
const { defaults } = require('jest-config');

const srcDir = path.join(__dirname, 'src');

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [path.join(srcDir, '/testUtils/setup')],
  moduleDirectories: ['node_modules', srcDir],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'scss'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
