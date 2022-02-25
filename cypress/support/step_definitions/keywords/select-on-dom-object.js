import * as selectors from '../mappings-importer.js';

Given(
  'the user selects {string} from {string}',
  (assertionValue, elementSelector) => {
    cy.get(selectors[elementSelector]).select(assertionValue);
  }
);
