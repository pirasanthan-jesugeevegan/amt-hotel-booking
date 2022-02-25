import * as selectors from '../mappings-importer';

Given('the button {string} is disabled', (elementSelectorKey) => {
  cy.get(selectors[elementSelectorKey]).should('be.disabled');
});

Given('the button {string} is not disabled', (elementSelectorKey) => {
  cy.get(selectors[elementSelectorKey]).should('not.be.disabled');
});
