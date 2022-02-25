/// <reference types="cypress" />
// ***********************************************************
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const cucumber = require('cypress-cucumber-preprocessor').default;

// promisified fs module
const fs = require('fs-extra');
const path = require('path');

logPath = process.env.LOG_DIR || path.join(__dirname, '..', 'log');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  on('after:run', (results) => {
    if (results) {
      fs.mkdirSync('cypress/.run', { recursive: true });
      fs.writeFile('cypress/.run/results.json', JSON.stringify(results));
    }
  });
  config.screenshotsFolder = path.join(logPath, 'screenshots');
  const file = config.env.configFile || 'prod';

  return getConfigurationByFile(file);
};
