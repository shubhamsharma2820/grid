var rect = {
    width:"20",
    height:"20"
}

var data = [
    {area: function(){
        var a = rect.width*rect.height;

        return a;
    }},
    {perimeter:function(){
        var p = 2*(rect.width+rect.height);
        return p;
    }},
];

console.log("Area of rectangle: "+data[0].area());
console.log("Perimeter of rectangle: "+data[1].perimeter());