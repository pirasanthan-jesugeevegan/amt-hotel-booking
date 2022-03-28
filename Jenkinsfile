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
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
        stage('Testing') {
            parallel {
                stage ('staging') {
                    steps {
                        script {
                            if (TAG?.isEmpty()) {
                                sh "npx cypress-tags run --browser ${BROWSER} --env configFile=stage TAGS='${TEST}'"
                            } else {
                                sh "npx cypress-tags run --browser ${BROWSER} --env configFile=stage TAGS='${TAG}'"
                            }
                        } 
                    }
                    post {
                        always {
                            sh 'node cucumber-html-report.js'
                            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML_Report_stage', reportTitles: ''])
                        }
                    }
                }
                stage ('production') {
                    steps {
                        script {
                            if (TAG?.isEmpty()) {
                                sh "npx cypress-tags run --browser ${BROWSER} --env configFile=prod TAGS='${TEST}'"
                            } else {
                                sh "npx cypress-tags run --browser ${BROWSER} --env configFile=prod TAGS='${TAG}'"
                            }
                        } 
                    }
                    post {
                        always {
                            sh 'node cucumber-html-report.js'
                            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML_Report_prod', reportTitles: ''])
                        }
                    }
                }
            
            }
        }
        
        
    }
    
}
