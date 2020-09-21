<h1>Technical Task </h1>
<code>A simple Node JS based web app involving a CI pipeline and testing.</code>

<h2>Details</h2>

Language: Node JS
Version: 14.11.0

<pre>
Dependancies

- Express
- Mocha
- Chai
- Chai-http
</pre>

<h2>Overview</h2>
<pre>
1. Getting Started
2. Jenkins Pipeline
3. Deployment
   3.1 Prerequisites
   3.2 Create a cluster  
   3.3 Deployment on cluster  
4. Limitations
5. Future Improvements
</pre>
<h3>1. Getting Started</h3>
The below instructions will illustrate how to start and run the simple web app in either a docker container locally or out of Node JS on the local host.

<h3>2. Jenkins Pipeline </h3>
<p>
This project has a CI pipeline that will test any new commits to ensure that the application still functions after any new updates,
 this is done by Jenkins CI and can be seen here:
 Jenkinsfile: https://github.com/rizi82/igreendata-technical-task/blob/master/Jenkinsfile
 </p>
 <h3>Deployment</h3>
 <h4>3.1 Prerequisites</h4>
 The EKS cluster has already setup and running for the application
 <h4>3.2 Create a cluster </h4>
 <pre>
  eksctl create cluster --name my-cluster --version 1.17 --fargate
  </pre>
  The above command will take approx 15 min to setup a cluster with nodes.
 <h4>3.3 Deployment on cluster </h4>  
 Deployment File: https://github.com/rizi82/igreendata-technical-task/tree/master/deployment 
 <pre>
 kubectl create namespace green
 kubectl apply -f green.yml -n green
 kubectl get all -n green
 </pre>
<h3>4. Limitations</h3>
<pre>
- No https support, only http support.
- Test Coverage could be improved.
- Docker image could be further optimized.
</pre>
<h3>5. Future Improvements</h3>
 <pre>
 - SSL on MS
 - Helm charts for k8s deployments
 - Auto trigger CD job on dockerhub push
 - docker image 'staging' flow i.e. build, test, release
 - Semantic versioning for application and tag docker image with the same
 - EKS setup  assumption
 - DNS name for API
 - private docker repository
 - Better logging and tracing for debugging
 </pre>
