// process command-line arguments
var yargs = require("yargs")
    .string("greeting")
    .check(function(argv) {
        if (!argv.greeting) {
            argv.greeting="Default 'Hello, world!' greeting";
        }
        return true;
    })
    .argv;


// Create a server 
var server = require('http').createServer(function(request, response) {
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end(yargs.greeting);

});

// Start the server
server.listen(8003);

// Tell the user where to access it
console.log("Server running at http://localhost:8000");
