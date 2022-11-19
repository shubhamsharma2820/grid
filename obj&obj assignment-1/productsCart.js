var data = [
    {name: "Rice", quantity: 2, price: 60},
    {name: "Dal", quantity: 3, price: 50},
    {name: "Salt", quantity: 1, price: 20},
    {total: function(){
        var t = 0;
        for(var i=0;i<data.length-1;i++){
            t+=data[i].price*data[i].quantity;
        }

        return t;
    }},
];

console.log(data[3].total());

