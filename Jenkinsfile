pipeline {
  agent any
   environment {
    dockerImage = ''
     uuid_hash = UUID.randomUUID().toString()
     registry = "rizi82/igreendata-technical-task"
     registryCredential = 'dockerhub'
  }
  
  
  tools {nodejs "node"}

  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/rizi82/igreendata-technical-task.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    } 
     stage('Building image') {
      steps{
        script{
          dockerImage = docker.build("${registry}:${uuid_hash}")
          echo "dockerImage: ${dockerImage}"
        }
      }
    }
    
    stage("Scan image"){
     steps{
         echo "Clair is an open source project for the static analysis of vulnerabilities in appc and ... Automatic container vulnerability and security scanning for appc and Docker"
     }   
  }
    stage("Push to Docker Hub") {
        steps {
        //cleanup current user docker credentials
        sh 'rm  ~/.dockercfg || true'
        sh 'rm ~/.docker/config.json || true'
        script{
         //configure registry
             docker.withRegistry( '', registryCredential ) {
                dockerImage.push("latest")
              }
            }
        }
    }
    
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi -f $registry:${uuid_hash}"
      }
    }
    
  }
}
