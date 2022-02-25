import getCookie from '../../methods/getCookie';

Given('the user navigates to {string}', (url) => {
  cy.visit(url);
});

Given(
  'the user navigates to employers portals {string} edit advert {string}',
  (employerId, advertId) => {
    cy.visit(
      `/schools/employers/${
        Cypress.env(employerId) || employerId
      }/booking/post-ad/${
        getLocalStorage('advertId') === null
          ? advertId
          : getLocalStorage('advertId')
      }?edit=true`
    )
      .url()
      .should(
        'contain',
        `/schools/employers/${
          Cypress.env(employerId) || employerId
        }/booking/post-ad/${
          getLocalStorage('advertId') === null
            ? advertId
            : getLocalStorage('advertId')
        }?edit=true`
      );
  }
);

Given(
  'the user navigates to employers portals {string} application {string}',
  (employerId, selfServiceId) => {
    cy.visit(
      `/schools/employers/${
        Cypress.env(employerId) || employerId
      }/applications/${
        getCookie('selfServiceId') === null
          ? selfServiceId
          : getCookie('selfServiceId')
      }`
    )
      .url()
      .should(
        'contain',
        `/schools/employers/${
          Cypress.env(employerId) || employerId
        }/applications/${
          getCookie('selfServiceId') === null
            ? selfServiceId
            : getCookie('selfServiceId')
        }`
      );
  }
);

Given('the user navigates to employers portals {string}', (employerId) => {
  cy.visit(`/schools/employers/${Cypress.env(employerId) || employerId}/apps`)
    .url()
    .should(
      'contain',
      `/schools/employers/${Cypress.env(employerId) || employerId}/apps`
    );
});

Given(
  'the user navigates to employers portals {string} current jobs',
  (employerId) => {
    cy.visit(
      `/schools/employers/${Cypress.env(employerId) || employerId}/current-jobs`
    )
      .url()
      .should(
        'contain',
        `/schools/employers/${
          Cypress.env(employerId) || employerId
        }/current-jobs`
      );
  }
);

Given('the user navigates to BOP employers page {string}', (employerId) => {
  cy.visit(
    `${Cypress.config().internalUrl}/product-fulfilment/employers/${
      Cypress.env(employerId) || employerId
    }`
  )
    .url()
    .should(
      'contain',
      `${Cypress.config().internalUrl}/product-fulfilment/employers/${
        Cypress.env(employerId) || employerId
      }`
    );
});

Given(
  'the user navigates to BOP employers {string} advert {string}',
  (employerId, advertId) => {
    cy.visit(
      `${Cypress.config().internalUrl}/product-fulfilment/employers/${
        Cypress.env(employerId) || employerId
      }/adverts/${
        cy.getCookie('selfServiceId') === null
          ? advertId
          : cy.getCookie('selfServiceId')
      }`
    )
      .url()
      .should(
        'contain',
        `${Cypress.config().internalUrl}/product-fulfilment/employers/${
          Cypress.env(employerId) || employerId
        }/adverts/${
          cy.getCookie('selfServiceId') === null
            ? advertId
            : cy.getCookie('selfServiceId')
        }`
      );
  }
);
