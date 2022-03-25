pipeline {

    agent any
    
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'E.g: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }

    stages {
        
        stage('Build'){
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                sh "npm i"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }
}
