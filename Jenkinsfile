pipeline {

     agent { dockerfile true }
    
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
}
