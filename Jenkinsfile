pipeline {

    agent { dockerfile true }
    
    tools {nodejs "nodejs"}

    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'electron', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
        choice(name: 'ENVIRONMENT', choices: ['dev', 'stage','prod'], description: 'Pick the environment to test against')
        choice(name: 'TEST', choices: ['@smoke', '@regression'], description: 'Pick the type of test to runned')
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
            steps {
                 script {
                if (TAG?.isEmpty()) {
                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=${ENVIRONMENT} TAGS='${TEST}'"
                } else {
                    sh "npx cypress-tags run --browser ${BROWSER} --env configFile=${ENVIRONMENT} TAGS='${TAG}'"
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
