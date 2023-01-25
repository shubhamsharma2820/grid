const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) =>{

    //const readableStrem = fs.createReadStream("input.txt");

    //readableStrem.on('data',(chunkdata) =>{
        //res.write(chunkdata);
    //});
    //readableStrem.on('end', () =>{
        //res.end();

    //});
    //readableStrem.on('error',() => {
        //console.log(err);
        //res.end("file not found");
    //})

    //Another way to stream data

    const readableStrem =fs.createReadStream("input.txt");
    readableStrem.pipe(res);
});

server.listen(8000, "127.0.0.1");