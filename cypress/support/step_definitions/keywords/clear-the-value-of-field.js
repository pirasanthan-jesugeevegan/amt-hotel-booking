import * as selectors from '../mappings-importer';

Given('the user clears {string}', (elementSelectorKey) => {
  cy.get(selectors[elementSelectorKey]).clear();
});

Given('the user clears all pills from section {string}', (elementSelector) => {
  cy.get(selectors[elementSelector]).each((el) => {
    el.click();
  });
});
