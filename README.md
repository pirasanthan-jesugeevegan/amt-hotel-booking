<p align="center">
 <img height="100px" src="https://miro.medium.com/max/7200/1*Jkb_tsMBOvL6wQ8bzldu8Q.png" />
   <img height="100px" src="https://iconape.com/wp-content/files/nn/51529/svg/cucumber.svg" />
 </p>
 <p align="center">
  <img height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" /> 
    <img height="50px" src="https://cdn.iconscout.com/icon/free/png-256/mocha-1-1175012.png" /> 
 </p>
This is a POC for CI/CD approach with behavior driven development (BBD) with pipeline that deploys to three different environments (Prod,Dev & Staging).

 <p align="center"> 
 
 |    Environment            |Status                                       
|----------------|-------------------------------|
|Prod|[![Netlify Status](https://api.netlify.com/api/v1/badges/73f78ac9-35a3-4753-ad6a-149adb773adb/deploy-status)](https://app.netlify.com/sites/hotel-prod/deploys)          |      
|Dev          |[![Netlify Status](https://api.netlify.com/api/v1/badges/308880ef-38f1-459c-8e21-33d1a1292617/deploy-status)](https://app.netlify.com/sites/hotel-dev/deploys)         |     
|Stage          |[![Netlify Status](https://api.netlify.com/api/v1/badges/2096d09a-c124-472f-b858-543e2c53eecc/deploy-status)](https://app.netlify.com/sites/hotel-stage/deploys)

</p>

</p>

## Background   
The application is a React.js, this is an example application uses to demonstrate how we can achive a CI/CD approach with behavior driven development (BBD) using cypress and cucumber. 

## Install

1.  clone the repo
2.  `npm install` or 	`yarn install`


## Run tests

 **Start React app**  
  `npm run start`

**Headless Run**
`npm run run:test:prod`
`npm run run:test:dev`
`npm run run:test:stage`

**Cypress Test Runner**
`npm run open:test:prod`
`npm run open:test:dev`
`npm run open:test:stage`
## Technology used:

 - React.js
 - Cypress 
 - Cucumber
 - Cucumber Html report

## DEMO
- [Live report - Schedule to run everyday ](https://pirasanthan-jesugeevegan.github.io/dev-hotel-booking/)
- Live App on Mutltiple environments
	- [Prod ](https://hotel-prod.netlify.app/)
	- [Dev ](https://hotel-dev.netlify.app/)
	- [Stage ](https://hotel-stage.netlify.app/)
