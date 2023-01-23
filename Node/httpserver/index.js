const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req.url);

    if(req.url === "/"){
    res.end("hello these are the night we live alive home");}
    else if(req.url === "/about"){
        res.end("hello these are the night ABOUT");
    }else if(req.url === "/contact"){
        res.end("hello please contact us");
    }else{
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1>404 Error this page does not exist<h1>");
    }

});
 server.listen(8000, "127.0.0.1", () =>{
    console.log("we live alive");
 });