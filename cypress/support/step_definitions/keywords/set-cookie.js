import {
  getTextAfter,
  getTextInBetweenFromUrl,
} from '../../methods/getTextFromURL';

Given('the user sets a cookie {string} with value {string}', (name, value) => {
  cy.setCookie(name, Cypress.env(value) || value);
});

Given(
  'the user captures value after {string} from url to cookie {string}',
  (value, name) => {
    cy.url().then((url) => {
      const refinedValue = getTextAfter(url, value);
      cy.setCookie(name, refinedValue);
      Cypress.Cookies.preserveOnce(name);
    });
  }
);

Given(
  'the user captures value after {string} & before {string} from url to cookie {string}',
  (start, end, name) => {
    cy.url().then((url) => {
      const refinedValue = getTextInBetweenFromUrl(url, start, end);
      cy.setCookie(name, refinedValue);
      Cypress.Cookies.preserveOnce(name);
    });
  }
);
