# Bosta Task

## Technologies
  - Express js
  - Mongo DB
  - Send in blue
  - Docker
  - Cron jobs

## Installation and Run
Install docker and docker-compose before starting this installation process.

1. Download The Repository Files
2. Make Sure These Ports are available ```Port:3000(API)``` ```Port:27017 (DB)``` 
3. In the terminal run ``` docker-compose up --build ```


## Database
### Description
There are three different collections : ```Users```, ```Checks``` and ```Reports```. with 1-N relationship between Users and Checks and 1-N relationship between Checks and Reports.


## API Routes
There is a file collection.json file have all the routes with the required params