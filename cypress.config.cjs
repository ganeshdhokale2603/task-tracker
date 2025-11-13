module.exports = {
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000, // 10 seconds default wait
  },
};