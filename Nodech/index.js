//creating new folder
const fs = require("fs");
 //fs.mkdirSync('hello');
 //creating new file and add data into it

 //fs.writeFileSync('hello/bio.text','hello wrold');
// reading data and encode it
 //const data = fs.readFileSync('hello/bio.text',"utf8");
 //console.log(data);

 //unlink the file
 //fs.unlinkSync("hello/bio.text");

 // delete the folder
 fs.rmdirSync("hello");
