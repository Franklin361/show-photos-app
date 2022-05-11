export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png|jpeg)$': '<rootDir>/src/test/__mocks__/fileMock.js',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    resolveJsonModule: true
  }