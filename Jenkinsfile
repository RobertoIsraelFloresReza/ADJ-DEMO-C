pipeline {
    agent any

    environment {
            PATH = '/usr/local/bin:¢{PATH:env}'
    }

    stages {
        // parar todos los servicios 
        stage('Parando Servicios') {
            steps {
                sh '''
                    docker-compose -p adj-demo down || true
                   '''
            }
    
        }

        // pera eliminar las imagenes anteriores 
        stage('Eliminando Imagenes Anteriores') {
            steps {
                sh '''
                    IMAGES=$(docker images --filter "label=com.docker.compose.project=adj-demo" -q)
                    if [ -n "$IMAGES" ]; then
                        docker images rmi $IMAGES
                    else 
                        echo "No hay imagenes para eliminar"
                    fi
                   '''
            }
    
        }

        // bajar la actualizacion 
        stage('Bajando Actualizacion') {
            steps {
                checkout scm
            }
    
        }

        // levantar y desplegar proyecto 
        stage('Desplegando Proyecto') {
            steps {
                sh '''
                    docker-compose up --build -d
                   '''
            }
    
        }
    }

    post {
        always {
            echo 'Pipeline finalizado.'
        }
        success {
            echo 'Pipeline ejecutado exitósamente.'
        }
        failure {
            echo 'Error en la ejecución del pipeline.'
        }
    }
}