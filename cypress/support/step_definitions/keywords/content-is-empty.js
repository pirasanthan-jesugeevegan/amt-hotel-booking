import * as selectors from '../mappings-importer';

Given('the field {string} content is empty', (elementSelector) => {
  cy.get(selectors[elementSelector]).invoke('val').should('be.empty');
});

Given('the field {string} content is not empty', (elementSelector) => {
  cy.get(selectors[elementSelector]).invoke('val').should('not.be.empty');
});
