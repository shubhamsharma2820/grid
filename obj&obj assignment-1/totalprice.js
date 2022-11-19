var e_commerce = {
    products : ["earphone","headphone","earpods"],
    quantity : [4,3,2],
    price : [700, 800, 1000],
  
    total_price :function(){
        var sum = 0;
        for(var i=0;i<e_commerce.quantity.length;i++){
            sum = (e_commerce.quantity[i]*e_commerce.price[i])+sum;
        } 

        return sum;
    }
  };

  console.log(e_commerce.total_price());