const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {

      require('./cypress/plugins/index.js')(on, config)
      on('task', {})
    },
    experimentalRunAllSpecs: false,
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/',
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/integration/**/*.{feature, features}',
    defaultCommandTimeout: 60000,
    requestTimeout: 30000,
    numTestsKeptInMemory: 0,
    responseTimeout: 30000,
    pageLoadTimeout: 30000,
    retries: {
      runMode: 0,
      openMode: 0
    }
  },
})