const { defineConfig } = require("cypress");

module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      pageLoadTimeout: 120000,
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
