var static = require('node-static');

var file = new static.Server('./public', { indexFile: "index.html" });
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);