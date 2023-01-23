//const { data } = require("browserslist");
const fs = require("fs");
const bioDate = {
    name: "Vinod",
    age : 25,
};
//const ObjData = JSON.parse(jsonData);
//console.log(ObjData.age);

//1.convert to JSON
//2.add to another file
//3.read file
//4.again convert back to js obj ori
//5.console.log

const jsonData = JSON.stringify(bioDate);
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});
fs.readFile("json1.json", "utf-8",(err, data) =>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});
