const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.send("hello from the express");
});
app.get("/about",(req,res) =>{
    res.send("hello world from the about page");
});

app.listen(8000, () =>{
    console.log("lsiting the port at 8000")
});

//API
//get-read
//post-creat
//put-update
//delete-delt