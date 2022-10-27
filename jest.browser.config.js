/** @type {import('jest').Config} */
module.exports = {...require('./jest.config.js'), ...{
  testEnvironment: "jsdom",
}};
