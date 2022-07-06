# nodejs-mongo-docker-boilerplate
A NodeJS boilerplate for mongo db with docker deployment


# Setup
* Add username, password and db name in .env file [ get from mongob atlas db ]
* run project locally
	- run `npm install`
	- run `npm run start` to run in localhost
	- check routes folder for API endpoints
* docker setup 	
	- Install docker in your local machine
	- run `docker build` or `docker-compose` commands [ check docker related filed for config options]
	- Pull the dockerized container from ```docker pull devk3/mongotest```
