# Full-Rest-Project
 
 This repo has two seperate folders. One (Node Rest API) containing my REST API, built with Node.js and Express and made to run in a Docker Container. The second (Rest Client) contains code for a simple html page that makes the REST get calls and displays formatted information. 

## Information to Run my Development Build

If cloning this repo to your local machine this is how you can build the docker image:

	1. In your terminal, navigate to the folder the Node Rest API code is in. It already 
	   inculdes a DockerFile and a Docker Compose file.
	2. To build and run the image in a container in one command use: "docker compose up"
	3. This will build the image and run it in a docker container.
	4. You can then open the index.html page in a local browser and see the data.
	5. It has basic buttons to list the collection and start over
	6. You can click on any artist name to pull up information about them and their albums 

The client webpage is very basic, with javascript handling the api requests and styled with css.