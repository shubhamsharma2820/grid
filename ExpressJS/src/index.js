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
const hbs = require("hbs");
const port = 8000;


//built in middleware
//console.log(path.join(__dirname, '../public'));

//to set the view engin

app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname, "../views");
const partialsPath = path.join(__dirname, "../views/Partials");
//console.log(viewsPath);
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//template engine route
app.get("/",(req,res) => {
    res.render("index");
});

app.get("/about", (req,res) => {
    res.render("about",{title:"about us"});
});

app.get("*", (req, res) =>{
    res.render("404", {errorcomment:"opps page is not found"});
});
//const staticPath = path.join(__dirname, '../public');
//app.use(express.static(staticPath));

app.get("/",(req,res) =>{
    res.send("hello from the server");
});

app.listen(port, () =>{
    console.log(`Listeing to music at ${port}`);
});