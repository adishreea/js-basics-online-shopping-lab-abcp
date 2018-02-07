var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var itemObj = {item: Math.random()}
  itemObj = cart
  return "${item} has been added to your cart."
}

function viewCart() {
  // write your code here
  console.log("In your cart, you have")
  for (var i = 0; i < cart.length; i++){
    console.log("${cart.key} at ${cart.value}")
  }
}

function total() {
  // write your code here
  var sum = 0
  for (var i = 0; i < cart.length; i++){
    sum += Object.keys(cart)[i]
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
