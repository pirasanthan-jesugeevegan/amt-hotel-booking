import * as selectors from '../mappings-importer';

Given(
  'the field {string} contains css {string} with value {string}',
  (elementSelector, css, assertionValue) => {
    cy.get(selectors[elementSelector])
      .scrollIntoView()
      .should((elementSelector) => {
        expect(elementSelector).to.have.css(css, assertionValue);
      });
  }
);

Given(
  'the field {string} does not contain css {string} with value {string}',
  (elementSelector, assertionValue) => {
    cy.get(selectors[elementSelector]).should((elementSelector) => {
      expect(elementSelector).not.to.have.css(css, assertionValue);
    });
  }
);
