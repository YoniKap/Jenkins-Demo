pipeline {
    agent any

    environment {
        APP_NAME = "jenkins-demo"
        DOCKER_IMAGE = "your-dockerhub-username/${APP_NAME}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building app...'
                sh 'cd app'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'echo "All tests passed!"'
            }
        }

        stage('Docker Build') {
            steps {
                echo "Building Docker image..."
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh """
                    echo "pushing to dockerhub"
                """
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'echo "Deployment simulated!"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully 🎉'
        }
        failure {
            echo 'Pipeline failed ❌'
        }
    }
}
