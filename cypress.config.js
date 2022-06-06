const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  retries: 1,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 90000,
  pageLoadTimeout: 120000,
  multiple: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  restartBrowserBetweenSpecFiles: true,
  screenshotsFolder:
    '/Users/pjesugeevegan/Desktop/hotel/hotel-booking/cypress/log/screenshots',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://hotel-prod.netlify.app',
  },
});
