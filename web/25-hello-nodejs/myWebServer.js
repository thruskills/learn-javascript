// importing a module called as http
// in built nodejs module
// this module will help you create a web server
var http = require('http');

// createServer method creates a new server instance
// it expects a callback method to handle the response
http.createServer(function(request, response){
    // setting the response header
    // first HTTP status = 200 OK
    // content-type, what kind of content is sent from the server
    // kind/type: html, css, javascript, image, video, text
    // MIME types ??? - for you to figure out 
    response.writeHead(200,{'Conten-Type': 'text/plain'});
    // end this response by sending the content
    response.write(request.url);
    response.end();
}).listen(4000);
// once server is created, we will make it listen on port 4000
// TCP port - range 
// there are some reserved ports

// we will log a message saying server is started
console.log('Server is running at http://localhost:4000');