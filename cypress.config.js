const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.amazon.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
