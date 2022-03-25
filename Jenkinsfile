import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline {

    agent any
    
    environment {
        BUILD_USER = ''
    }
    
    tools {nodejs "nodejs"}

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/Home/**', description: 'E.g: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }

    options {
        ansiColor('xterm')
    }
    
    stages {
        
        stage('Build'){
            steps {
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
        
        stage('Testing') {
            steps {
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }
    post {
        always {
           
                    sh 'npm run cucumber-html-report.js'
        
        
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}
