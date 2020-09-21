# Technical Task
A simple Node JS based web app involving a CI pipeline and testing.

# Overview

Language: Node JS
Version: 14.11.0

## Dependancies

- Express
- Mocha
- Chai
- Chai-http

# Getting Started
The below instructions will illustrate how to start and run the simple web app in either a docker container locally or out of Node JS on the local host.

# Prerequisites

## EKS Cluster
The EKS cluster has already setup and running for the application

### Creae EKS cluster 
```
eksctl create cluster --name my-cluster --version 1.17 --fargate
```
The above command will take approx 15 min to setup a cluster with nodes.

# Jenkins Pipeline
This project has a CI pipeline that will test any new commits to ensure that the application still functions after any new updates,
 this is done by Jenkins CI and details can be seen here:

## Assumptions

Jenkins server has already setup and running and following plugins installed.

- plugin 1
- plugin 2
- plugin 3
   
## Bootstrap
### Create DockerHub credentials
Please add dockerhub logic credentials with this name

### Jenkinsfile
Jenkins file: https://github.com/rizi82/igreendata-technical-task/blob/master/Jenkinsfile

## Pipeline Stages

### Checkout
This stage clones application code repository to build server

### Install dependencies
NodeJS ependencies are installed in this stage

### Test
Application testing performed in this stage

### Build Container
Application docker image is created in this stage

### Container Scan
Docker image is scanned using clair

### Push to DockerHub
Docker image is pushed to DockerHub

### Deploy
Application is deployed to kubernetes (EKS)

# Limitations

* No https support, only http support.
* Test Coverage could be improved.
* Docker image could be further optimized.
* EKS cluster setup code not provided due to time limitation

# Future Improvements

 - SSL on MS
 - Helm charts for k8s deployments
 - Auto trigger CD job on dockerhub push
 - docker image 'staging' flow i.e. build, test, release
 - Semantic versioning for application and tag docker image with the same
 - EKS setup assumption
 - DNS name for API
 - private docker repository
 - Better logging and tracing for debugging
