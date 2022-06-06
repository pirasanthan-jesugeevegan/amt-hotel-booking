/// <reference types="cypress" />
// ***********************************************************
/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra');
const path = require('path');
const superagent = require('superagent');

logPath = process.env.LOG_DIR || path.join(__dirname, '..', 'log');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  (async () => {
    try {
      const response = await superagent.get(
        'https://624c1f9471e21eebbcfa85b5.mockapi.io/banner'
        // 'https://element-selector-app.herokuapp.com/attributes/'
      );
      fs.writeFile(
        'cypress/fixtures/mapping/global.json',
        JSON.stringify(response.body)
      );
    } catch (error) {
      console.log(error);
    }
  })();
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
