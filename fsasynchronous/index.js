const fs = require("fs");
 
fs.writeFile("read.text", "today is good day :)", (err)=>{
    console.log("file is created");
}); 