import * as selectors from '../mappings-importer.js';
Given(
  'the user enters {string} days from the current date in the date field {string}',
  (value, elementSelector) => {
    const first_char = value.charAt(0);
    const today = new Date();
    const addDays = today.setDate(today.getDate() + parseInt(value));
    const inputDateValue = new Date(addDays).toLocaleDateString('en-GB');
    cy.get(selectors[elementSelector])
      .should('be.visible')
      .clear()
      .type(inputDateValue);
    if (first_char === '-') {
      cy.get('body').then((body) => {
        if (body.find(selectors.advert_date_error).length > 0) {
          cy.get(selectors.advert_date_error)
            .should('be.visible')
            .and('contain', 'Please enter an advert start date');
        }
      });
    }
  }
);
