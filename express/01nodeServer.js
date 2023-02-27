const http=require('http');

const fs = require('fs');

const server = http.createServer((request, response)=> {
    //console.log(request);
    if(request.url=='/') {
        response.writeHead(200, {'content-type':'text/html'});
        response.write('<h2>hello express</h2>');
    } else if(request.url=='/gethtml') {
        response.writeHead(200, {'content-type':'text/html'});
        const htmlpage = fs.readFileSync('01index.html')
        response.write(htmlpage);

        //in the above index.html, if we have an image file, then browser will send another http request which will go the else section below and result in image not displaying. we will resolve that using express.
    }  else {
        response.writeHead(404, {'content-type':'text/html'});
        response.write('<h2>fuck express</h2>');
    }
    response.end();
});

server.listen(3000);
