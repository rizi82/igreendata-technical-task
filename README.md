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
2. local Node JS
	2.1 Prerequisites
	2.2 Test the Application
3. local Docker
	3.1 Prequisites
	3.2 Running with Docker
4. Jenkins Pipeline
5. Deployment
   5.1 Prerequisites
   5.2 Create a cluster  
   5.3 Deployment on cluster  
6. Limitations
7. Future Improvements
</pre>
<h3>1. Getting Started</h3>
The below instructions will illustrate how to start and run the simple web app in either a docker container locally or out of Node JS on the local host.

<h3>2. Local Node JS</h3>
Instructions to run with Node JS:

<h4>2.1 Prerequisites</h4>
Node JS (Tested on Node V14.11.0 and npm 6.14.8)
  <h4>2.2 Running with Node JS</h4>
<pre>
Clone the repository
git@github.com:rizi82/igreendata-technical-task.git

<b>Install the Node JS Dependancies</b>
npm install
<b>Test the Application</b>
npm run test
</pre>
<h3>3. Local Docker</h3>
<h4>3.1 Prerequisites</h4>
<p>Docker 10.01+</p>

<h4>3.2 Running with Docker</h4>
<pre>
<b>Build docker image</b>
docker build --build-arg GIT_COMMIT=123 --build-arg APP_VERSION=1.0  -t rizi82/igreendata-technical-task .
<b>Run docker image</b>
docker run -p 3000:3000 -d  izi82/igreendata-technical-task

The App starts on port 3000, therefore the endpoints are available here:
http://localhost:3000
http://localhost:3000/version
</pre>
<h3>4. Jenkins Pipeline </h3>
<p>
This project has a CI pipeline that will test any new commits to ensure that the application still functions after any new updates,
 this is done by Jenkins CI and can be seen here:
 Jenkinsfile: https://github.com/rizi82/igreendata-technical-task/blob/master/Jenkinsfile
 </p>
 <h3>Deployment</h3>
 <h4>5.1 Prerequisites</h4>
 The EKS cluster has already setup and running for the application
 <h4>5.2 Create a cluster </h4>
 <pre>
  eksctl create cluster --name my-cluster --version 1.17 --fargate
  </pre>
  The above command will take approx 15 min to setup a cluster with nodes.
 <h4>5.3 Deployment on cluster </h4>  
 Deployment File: https://github.com/rizi82/igreendata-technical-task/tree/master/deployment 
 <pre>
 kubectl create namespace green
 kubectl apply -f green.yml -n green
 kubectl get all -n green
 </pre>
<h3>6. Limitations</h3>
<pre>
- No https support, only http support.
- Test Coverage could be improved.
- Docker image could be further optimized.
</pre>
<h3>7. Future Improvements</h3>
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
