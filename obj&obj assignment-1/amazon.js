var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
];


for(var i=0;i<amazon.length;i++){
    console.log("Name:"+amazon[i].name+" Rating:"+amazon[i].rating);
}

var sum=0;
for(var i=0;i<amazon.length;i++){
    sum+=amazon[i].rating;
}

console.log("Average: "+sum/amazon.length);

var min = amazon[0].price;

for(var i=0;i<amazon.length;i++){
    if(min>amazon[i].price){
        min=amazon[i].price;
    }
}

console.log("Minimum price: "+min);