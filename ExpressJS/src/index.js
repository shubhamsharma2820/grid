// const express = require("express");
// const path = require("path");
// const app = express();

// //console.log(__dirname);
//  //builtin middleware
// //app.use(express.static(staticPath));

// //console.log(path.join(__dirname, "../public"));

// const staticPath = path.join(__dirname, "../public")

// app.use(express.static(staticPath));

// app.get("/", (req, res) =>{
//     res.send("hello from the express");
// });
// app.get("/about",(req,res) =>{
//     res.send("hello world from the about page");
// });

// app.listen(8000, () =>{
//     console.log("lsiting the port at 8000")
// });

// //API
// //get-read
// //post-creat
// //put-update
// //delete-delt

const express = require("express");
const  path = require("path");
const app = express();
const port = 8000;

//built in middleware
console.log(path.join(__dirname, '../public'));
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.get("/",(req,res) =>{
    res.send("hello from the server");
});

app.listen(port, () =>{
    console.log(`Listeing to music at ${port}`);
});