pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'export PATH=/home/administrator/.nvm/versions/node/v22.23.3/bin:$PATH && npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'export PATH=/home/administrator/.nvm/versions/node/v22.23.3/bin:$PATH && npm run build'
            }
        }

        stage('Automated Testing') {
            steps {
                sh 'export PATH=/home/administrator/.nvm/versions/node/v22.23.3/bin:$PATH && npm test'
            }
        }
    }
}

