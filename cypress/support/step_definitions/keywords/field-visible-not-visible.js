import * as selectors from '../mappings-importer.js';

const implementation = (elementKey, condition) => {
  const element = selectors[elementKey];

  cy.get(element).should(condition);
};

Given('the field {string} is visible', (elementKey) => {
  implementation(elementKey, 'be.visible');
});

Given('the field {string} is not visible', (elementKey) => {
  implementation(elementKey, 'be.hidden');
});

Given('the field {string} does not exist', (elementKey) => {
  implementation(elementKey, 'not.exist');
});
Given('the field {string} is in viewport', (element) => {
  cy.get(selectors[element]).should(($el) => {
    const bottom = Cypress.$(cy.state('window')).height();
    const rect = $el[0].getBoundingClientRect();

    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
    expect(rect.top).not.to.be.greaterThan(bottom);
    expect(rect.bottom).not.to.be.greaterThan(bottom);
  });
});

Given('the user scrolls to {string}', (element) => {
  cy.get(selectors[element]).scrollIntoView();
});
