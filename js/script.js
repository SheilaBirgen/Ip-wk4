var price , crust_price, topping_price ;
let total = 0;
//pizza constructor
function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}
//location constructor
function Location(name, estate) {
  this.name = name;
  this.estate = estate;
}
//price size
var sizePrice = {
  small: 750,
  medium: 900,
  large: 1200
};
var toppingPrice = [
  {
    pepperoni: {
      small: 50,
      medium: 100,
      large: 150
    },
     mushroom: {
      small: 25,
      medium: 50,
      large: 75
    },
    bacon: {
      small: 50,
      medium: 75,
      large: 100
    }
  }
];
//crust price
var crustPrice = {
  crispy: 300,
  stuffed: 200,
  gluten: 100
};//function calc prize according to size
function sizeCalcPrice(size) {
  if (size === "small") {
    return sizePrice.small * 1;
  } else if (size === "medium") {
    return sizePrice.medium * 1;
  } else {
    return sizePrice.large * 1;
  }
}
//price according to crust
function crustCalcPrice(crust) {
  if (crust === "crispy") {
    return crustPrice.crispy * 1;
  } else if (crust === "stuffed") {
    return crustPrice.stuffed * 1;
  } else {
    return crustPrice.gluten * 1;
  }
}
/*$(document).ready(function(){
    $("button.proceed").click(function(event){
        let pname = $(".name option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));
        switch(psize){
            case "0":
              price =0;
            break;
            case "large":
               price = 1200;
               console.log(price);
             break;
             case "medium":
               price = 850;
               console.log("The price is "+price);
             break;
             case "small":
               price = 600;
               console.log(price);
             default:
               console.log("error"); 
           }
           switch(pcrust){
            case "0":
              crust_price = 0;
            break;
            case "Crispy":
              crust_price = 200;
            break;
            case "Stuffed":
              crust_price = 250;
            break;
            case "Gluten-free":
              crust_price = 180;
            break;
            default:
              console.log("No price"); 
          };