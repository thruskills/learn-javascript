let http = require('http');
 http.createServer(function(req,res){

    if(req.url=="/"){

        res.writeHead(200,{
            "Content-Type":"text/html"
        });
    
        res.write("<html><head><title>Hello world</title><body><h1>Hello World</h1></body></head></html>");
    }
    else if(req.url =="/data"){


    res.writeHead(200,{
        "Content-Type":"application/json"
    });

    let data = {
        "name":"dishi",
        "age":24
    }
    res.write(JSON.stringify(data));
    }
    else {
        res.writeHead(404,{
            "Content-Type":"text/html"
        });
    
        res.write("<html><head><title>Not Found Error</title><body><h1>Hello World</h1></body></head></html>");
    }
       

}).listen(3000);


console.log("server is running in 3000 port");