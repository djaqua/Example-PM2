# Example-PM2
Example NodeJS service and instructions for basic administration with PM2

To run and pass node command-line arguments to the NodeJS application 
(via yargs), start the service with the following command:

pm2 start index.js -x -- --greeting="Custom greeting here"

