import * as selectors from '../mappings-importer.js';

Given(
  'the user enters {string} in the field {string}',
  (Value, elementSelector) => {
    cy.get(selectors[elementSelector])
      .should('be.visible')
      .type(Cypress.env(Value) || Value);
  }
);

Given('the user fills the form', (dataTable) => {
  dataTable.hashes().forEach((elem) => {
    if (elem.FieldType === 'input') {
      cy.get(selectors[elem.Field]).then((value) => {
        if (value[0].value.length > 0) {
          cy.wrap(value).clear().type(elem.Value);
        } else {
          cy.wrap(value).type(elem.Value);
        }
      });
    } else if (elem.FieldType === 'select') {
      cy.get(selectors[elem.Field]).select(elem.Value);
    } else if (elem.FieldType === 'checkbox') {
      cy.get(selectors[elem.Field]).check(elem.Value).should('be.checked');
    } else if (elem.FieldType === 'textbox') {
      cy.get(selectors[elem.Field])
        .find('[contenteditable]')
        .clear()
        .type(elem.Value);
    } else if (elem.FieldType === 'textarea') {
      cy.get(selectors[elem.Field]).focus().clear().type(elem.Value);
    } else if (elem.FieldType === 'button') {
      cy.get(selectors[elem.Field]).should('be.visible').click();
    } else if (elem.FieldType === 'file') {
      cy.get(selectors[elem.Field]).attachFile(elem.Value);
    }
  });
});
