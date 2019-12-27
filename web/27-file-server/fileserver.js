var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  console.log(q);

  let contentType = 'text/html';
  var filename = "." + q.pathname;
  if(q.pathname === '/'){
    filename = filename + 'index.html'
  }

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': contentType});
      return res.end("404 Not Found");
    }

    if(filename.endsWith('.png')){
      contentType = 'images/png'
    }
    
    res.writeHead(200, {'Content-Type': contentType});
    let html = data.toString();
    html = html.replace('{{hostname}}', q.host)
        .replace('{{pathname}}', q.pathname)
        .replace('{{query}}', JSON.stringify(q.query));
    res.write(html);
    return res.end();
  });
}).listen(9090); 
