import * as selectors from '../mappings-importer';

Given(
  'the field {string} contains {string}',
  (elementSelector, assertionValue) => {
    const array = assertionValue.split(',');
    if (assertionValue) {
      for (let item in array) {
        cy.contains(array[item]);
        cy.get('body').then((body) => {
          if (body.find(selectors[elementSelector]).length > 0) {
            cy.get(selectors[elementSelector]).should((elementSelector) => {
              expect(elementSelector).to.contain(array[item]);
            });
          } else {
            cy.get(selectors[elementSelector])
              .scrollIntoView()
              .should((elementSelector) => {
                expect(elementSelector).to.contain(array[item]);
              });
          }
        });
      }
    }
  }
);

Given(
  'the field {string} does not contain {string}',
  (elementSelector, assertionValue) => {
    cy.get('body').then((body) => {
      if (body.find(selectors[elementSelector]).length > 0) {
        const array = assertionValue.split(',');
        for (let item in array) {
          cy.get(selectors[elementSelector]).should((elementSelector) => {
            expect(elementSelector).not.to.contain(array[item]);
          });
        }
      }
    });
  }
);

Given(
  'the input field {string} contains {string}',
  (elementSelector, assertionValue) => {
    cy.get('body').then((body) => {
      if (body.find(selectors[elementSelector]).length > 0) {
        cy.get(selectors[elementSelector])
          .invoke('val')
          .should((elementSelector) => {
            expect(elementSelector).to.contain(assertionValue);
          });
      } else {
        cy.get(selectors[elementSelector])
          .scrollIntoView()
          .invoke('val')
          .should((elementSelector) => {
            expect(elementSelector).to.contain(assertionValue);
          });
      }
    });
  }
);

Given('the page contains value {string}', (assertionValue) => {
  const array = assertionValue.split(',');
  for (let item in array) {
    cy.contains(array[item]);
  }
});

Given('the page contains these values', (dataTable) => {
    dataTable.hashes().forEach((elem) => {
        cy.get(selectors[elem.Element])
            .should('be.visible')
            .and('contain', elem.Value);
    });
});
