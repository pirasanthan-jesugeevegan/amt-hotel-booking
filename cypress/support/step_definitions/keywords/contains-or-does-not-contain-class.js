import * as selectors from '../mappings-importer';

Given(
  'the field {string} contains class {string}',
  (elementSelector, assertionValue) => {
    cy.get(selectors[elementSelector])
      .scrollIntoView()
      .should((elementSelector) => {
        expect(elementSelector).to.have.class(selectors[assertionValue]);
      });
  }
);

Given(
  'the field {string} does not contain class {string}',
  (elementSelector, assertionValue) => {
    cy.get(selectors[elementSelector]).should((elementSelector) => {
      expect(elementSelector).not.to.have.class(selectors[assertionValue]);
    });
  }
);
