const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const env = (env) => {
  if (env === 'https://hotel-prod.netlify.app') {
    return 'Production';
  } else if (env === 'https://hotel-stage.netlify.app') {
    return 'Staging';
  } else if (env === 'https://hotel-dev.netlify.app') {
    return 'Dev';
  }
};

fs.readFile('cypress/.run/results.json', function read(err, data) {
  if (err) {
    throw err;
  }
  let runInfos = JSON.parse(data);

  report.generate({
    pageTitle: `${env(runInfos.config.baseUrl)} | Automation Report`,
    reportName: `Automation Report for ${env(
      runInfos.config.baseUrl
    )} Environment`,
    pageFooter: `<div style="text-align: center"><p>Any issues contact the QA team on #qa channel</p></div>`,
    jsonDir: 'cypress/reports',
    reportPath: 'cypress/reports',
    displayReportTime: true,
    displayDuration: true,
    metadata: {
      browser: {
        name: runInfos.browserName,
        version: runInfos.browserVersion,
      },
      device: 'Virtual Machine',
      platform: {
        name: 'linux',
        version: runInfos.osVersion,
      },
    },
    customData: {
      title: 'Run info',
      data: [
        {
          label: 'Environment',
          value: `${env(runInfos.config.baseUrl)}`,
        },
        { label: 'Cypress Version', value: runInfos.cypressVersion },
        { label: 'Test Type', value: 'Regression' },
        {
          label: 'Execution Start Time',
          value: new Date(runInfos.startedTestsAt).toLocaleString(),
        },
        {
          label: 'Execution End Time',
          value: new Date(runInfos.endedTestsAt).toLocaleString(),
        },
      ],
    },
  });
});
