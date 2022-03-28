pipeline {

    agent { dockerfile true }

    triggers {
        cron('H/5 * * * *')
    }

    tools {nodejs "nodejs"}

    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'electron', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
        choice(name: 'ENVIRONMENT', choices: ['stage','dev', 'prod'], description: 'Pick the environment to test against')
        choice(name: 'TEST', choices: ['@regression','@smoke'], description: 'Pick the type of test to runned')
        string(name: 'TAG', defaultValue: '', description: 'Run collection of test E.g: @navigation')
    }

    options {
        ansiColor('xterm')
    }
    
    stages {
        
        stage('Verify'){
            steps {
                sh 'npm run cy:verify'
            }
        }
        stage('Testing') {
            steps {
                 script {
                    if ( currentBuild.rawBuild.getCauses()[0].toString().contains('UserIdCause') ){
                        if (TAG?.isEmpty()) {
                            sh "npx cypress-tags run --browser ${BROWSER} --env configFile=${ENVIRONMENT} TAGS='${TEST}'"
                        } else {
                            sh "npx cypress-tags run --browser ${BROWSER} --env configFile=${ENVIRONMENT} TAGS='${TAG}'"
                        }
                    } else {
                        if(JOB_NAME == 'amt-tes-prod'){
                            sh "npx cypress-tags run --browser ${BROWSER} --env configFile=prod TAGS='@regression'"
                        } else {
                            sh "npx cypress-tags run --browser ${BROWSER} --env configFile=stage TAGS='@regression'"
                        }
                    }
                
                 } 
            }
        }
  
    }
    post {
        always {
           sh 'node cucumber-html-report.js'
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}
