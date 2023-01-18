# CRUD
0 - clone this repository to your working directory 
  - by the command "git clone https://github.com/musabobada/CRUD-App.git"

1 - Start the Docker app (Docker Desktop app should be installed) 
  
2 - Open the terminal to the the path of the root of this repository "/CRUD-App"
  
3 - Build the Docker image by the command "docker build -t [image name EXAMPLE: crud] [path EXAMPLE: . ]"

4 - Create Docker container by the command "docker run -t -ip 3000:3000 [image name or ID]"

- The flag "-ip" and "3000:3000" for specifying the port for the container

5 - Open http://localhost:3000"
