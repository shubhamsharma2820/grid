const express = require("express");
const app = express();
const port = 8000;

app.get('/contact', (req, res) =>{
    res.send("<h1>welcome to my home page<h1>");
});

app.listen(port,() =>{
    console.log(`listening to the port no ${port}`);
});