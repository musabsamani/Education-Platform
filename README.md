# CRUD

0 - clone this repository to your working directory 
  - by the command "git clone https://github.com/musabobada/CRUD-App.git"

## Two method for running this file
### First : npm

1 -  Open the terminal to the the path of the root of this repository "/CRUD-App"
  
2 - RUN the command "npm install"
  
3 - RUN the command "npm start"

4 - Open http://localhost:5000"

### Second : Docker

1 - Start the Docker app (Docker Desktop app should be installed) 
  
2 - Open the terminal to the the path of the root of this repository "/CRUD-App"
  
3 - Build the Docker image by the command "docker build -t [image name EXAMPLE: crud] [path EXAMPLE: . ]"

4 - Create Docker container by the command "docker run -t -ip 5000:5000 [image name or ID]"

- The flag "-ip" and "5000:5000" for specifying the port for the container

5 - Open http://localhost:5000"
