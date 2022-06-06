FROM cypress/browsers:node14.17.0-chrome91-ff89

RUN mkdir /hotel-booking

WORKDIR /hotel-booking

COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

CMD [""] 