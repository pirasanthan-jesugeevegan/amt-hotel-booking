pipeline {

    agent { dockerfile true }

    triggers {
         cron('H 08 * * *')
    }

    tools {nodejs "nodejs"}
    if (JOB_NAME == 'deploy') {
       parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'electron', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
        choice(name: 'ENVIRONMENT', choices: ['stage','dev', 'prod'], description: 'Pick the environment to test against')
        choice(name: 'TEST', choices: ['@regression','@smoke'], description: 'Pick the type of test to runned')
        string(name: 'TAG', defaultValue: '', description: 'Run collection of test E.g: @navigation')
        password(name: 'USERNAME', defaultValue: 'automation_teacher')
        password(name: 'PASSWORD', defaultValue: 'Test1234!')
    }
    } else {
        parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'electron', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
        choice(name: 'ENVIRONMENT', choices: ['tes-stage','tes-dev', 'tes-prod'], description: 'Pick the environment to test against')
        choice(name: 'TEST', choices: ['@regression','@smoke'], description: 'Pick the type of test to runned')
        string(name: 'TAG', defaultValue: '', description: 'Run collection of test E.g: @navigation')
        password(name: 'USERNAME', defaultValue: 'automation_teacher')
        password(name: 'PASSWORD', defaultValue: 'Test1234!')
    }

    }

    

    options {
        ansiColor('xterm')
    }
    
    stages {
        
        stage('Verify'){
            steps {
                sh 'npm i'
                echo "$JOB_NAME"
            }
        }
        stage('Run Tests') {
            parallel {
                stage('Test Home') {
                    steps {
                        script {
                            if ( currentBuild.rawBuild.getCauses()[0].toString().contains('UserIdCause') ){
                                if (TAG?.isEmpty()) {
                                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=${ENVIRONMENT} --spec 'cypress/e2e/Home/*.feature' TAGS='${TEST}'"
                                } else {
                                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=${ENVIRONMENT} --spec 'cypress/e2e/Home/*.feature' TAGS='${TAG}'"
                                }
                            } else {
                                if(JOB_NAME == 'amt-tes-prod'){
                                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=prod --spec 'cypress/e2e/Home/*.feature' TAGS='@regression'"
                                } else {
                                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=stage --spec 'cypress/e2e/Home/*.feature' TAGS='@regression'"
                                }
                            }
                        } 
                    }
                }
                stage('Test Rooms') {
                    steps {
                        script {
                            if ( currentBuild.rawBuild.getCauses()[0].toString().contains('UserIdCause') ){
                                if (TAG?.isEmpty()) {
                                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=${ENVIRONMENT} --spec 'cypress/e2e/Rooms/*.feature' TAGS='${TEST}'"
                                } else {
                                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=${ENVIRONMENT} --spec 'cypress/e2e/Rooms/*.feature' TAGS='${TAG}'"
                                }
                            } else {
                                if(JOB_NAME == 'amt-tes-prod'){
                                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=prod --spec 'cypress/e2e/Rooms/*.feature' TAGS='@regression'"
                                } else {
                                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=stage --spec 'cypress/e2e/Rooms/*.feature' TAGS='@regression'"
                                }
                            }
                
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