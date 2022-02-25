import * as selectors from '../mappings-importer.js';

Given('the user clicks on {string}', (elementSelector) => {
  cy.get('body').then((body) => {
    if (body.find(selectors[elementSelector]).length > 0) {
      cy.get(selectors[elementSelector]).click();
    } else {
      cy.contains(elementSelector).click();
    }
  });
});

Given('the user clicks on visible {string}', (elementSelector) => {
  cy.get('body').then((body) => {
    if (body.find(selectors[elementSelector]).length > 0) {
      cy.get(selectors[elementSelector]).filter(':visible').click();
    } else {
      cy.contains(elementSelector).filter(':visible').click();
    }
  });
});

Given(
  'the user clicks a link {string} redirected on the same window',
  (elementSelector) => {
    cy.get(selectors[elementSelector]).invoke('removeAttr', 'target').click();
  }
);
