//***********Busines Logic**********//

//pizza constructor
function Pizza(type, size, crust) {
  this.type = type;
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
    mushrooms: {
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
};
//function calc prize according to size
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
// price according to topping
function toppingsCalcPrice(toppings) {
  var noOfTopping = 0;
  for (i = 0; i < toppings.length; i++) {
    if (toppings[i] == "pepperoni") {
      noOfTopping += 100;
    }
    if (toppings[i] == "mushrooms") {
      noOfTopping += 50;
    }
    if (toppings[i] == "bacon") {
      noOfTopping += 75;
    }
  }
  return noOfTopping * 1;
}

//function check for an element in array
function checkPepperoni(topping) {
  return topping === "pepperoni";
}

// *********UI Logic***********//
$("document").ready(function() {
  //fetch the Type of pizza
  function getPizzaType() {
    return $("#pizza-type")
      .find(":selected")
      .val();
  }
  //fetch size of pizza
  function getPizzaSize() {
    return $("#pizza-size")
      .find(":selected")
      .val();
  }
  //fetch crust of pizza
  function getCrust() {
    return $("#pizza-crust")
      .find(":selected")
      .val();
  }
  //fetch topping of pizza
  function getToppings() {
    var toppingList = [];
    $(".toppings :checked").each(function() {
      toppingList.push($(this).val());
    });
    return toppingList;
  }

  //submit event
  $("form#myform").submit(function(event) {
    event.preventDefault();
    var pizzaType = getPizzaType();
    var pizzaSize = getPizzaSize();
    var crust = getCrust();
    var toppingList = getToppings();

    var newPizza = new Pizza(pizzaType, pizzaSize, crust);
    newPizza.toppings.push(toppingList);
    $("#cart").hide();
    $("#table").show();
    $(".checkout").show();
    var oneOrder =
      sizeCalcPrice(pizzaSize) +
      crustCalcPrice(crust) +
      toppingsCalcPrice(toppingList);

    //append item to the cart when submit event is triggered
    $("#items").append(
      "<tr>" +
        "<td>" +
        newPizza.type +
        "</td>" +
        "<td>" +
        "<p>" +
        newPizza.size +
        "</td>" +
        "<td>" +
        "<p>" +
        newPizza.crust +
        "</p>" +
        "</td>" +
        "<td>" +
        newPizza.toppings +
        "</td>" +
        "<td>" +
        oneOrder +
        "</td>" +
        "</tr>"
    );
  });
  var totalQuantity = parseInt($("#quantity").val());
  function calcTotal() {
    var priceOnePizza =
      sizeCalcPrice(getPizzaSize()) +
      crustCalcPrice(getCrust()) +
      toppingsCalcPrice(getToppings());
    return priceOnePizza;
  }
  var pizzaList = [];
  //what happens when submit button is triggered
  $("#orderbtn").on("click", function() {
    totalQuantity += 1;
    $("#quantity").text(totalQuantity);
    pizzaList.push(calcTotal());
  });

  //display total prize of your order
  $("#gettotal").click(function(event) {
    event.preventDefault();
    var total = 0;
    pizzaList.forEach(function(pizza) {
      total += pizza;
    });

    alert('Total amount for your order is:'+total);
    var deliver = confirm(
      "Would you like us deliver your favourite pizza to your doorstep? transport cost ksh 150."
    );
    if (deliver) {
      var place = prompt("Enter your location");
      var phonenumber = prompt("enter your number");
      var finalPrice = calcTotal() * totalQuantity + 150;
      alert('Thankyou. Your order will be delivered at '+place+ 'Total amout is '+finalPrice);
      $("#place").text(place);
      $("phonenumber").number(phonenumber);

      $("#finalprice").text(finalPrice);
      
      $("#success").show();
    } else {
      $("#no-location").text(calcTotal() * totalQuantity);
      $("#no-delivery").show();
    }
    // $("#money").text(total);
    
  });

  //event to trigger location form
  $("#myModel").click(function() {
    var deliver = confirm(
      "Would you like us deliver your favourite pizza to your doorstep? transport cost ksh 150."
    );
    $("#pizza-type").val("");
    $("#pizza-size").val("");
    $("#pizza-crust").val("");
    $("#items").remove();
    $("#quantity").text(0);
  });
});
