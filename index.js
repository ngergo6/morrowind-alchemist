var static = require('node-static');

var file = new static.Server('./public', { indexFile: "index.html" });

var port = process.env.PORT || 5000;

console.log("starting server");

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);