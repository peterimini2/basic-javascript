let cartQuantity = 0;
const btn1 = document.getElementById('btn1');
btn1.addEventListener("click", () => {
  console.log(`Cart quantity: ${cartQuantity}`);
});


const addCart = document.getElementById('btn2');
addCart.addEventListener("click", () => {
  cartQuantity++;
  console.log(`Cart quantity: ${cartQuantity}`);
});

const removeCart = document.getElementById('btn8');
removeCart.addEventListener("click", () => {
  cartQuantity--;
  console.log(`Cart quantity: ${cartQuantity}`);
});

const btn3 = document.getElementById('btn3');
btn3.addEventListener("click", () => {
  cartQuantity += 2;
  console.log(`Cart quantity: ${cartQuantity}`);
});

const btn4 = document.getElementById('btn4');
btn4.addEventListener("click", () => {
  cartQuantity += 3;
  console.log(`Cart quantity: ${cartQuantity}`);
});

const btn6 = document.getElementById('btn6');
btn6.addEventListener("click", () => {
  cartQuantity += 4;
  console.log(`Cart quantity: ${cartQuantity}`);
});

const btn7 = document.getElementById('btn7');
btn7.addEventListener("click", () => {
  cartQuantity += 5;
  console.log(`Cart quantity: ${cartQuantity}`);
});

const btn9 = document.getElementById('btn9');
btn9.addEventListener("click", () => {
  cartQuantity -= 2;
  console.log(`Cart quantity: ${cartQuantity}`);
});

const btn10 = document.getElementById('btn10');
btn10.addEventListener("click", () => {
  cartQuantity -= 3;
  console.log(`Cart quantity: ${cartQuantity}`);
});

const resetCart = document.getElementById('btn5');
resetCart.addEventListener("click", () => {
  cartQuantity = 0;
  console.log('Cart was reset.'); console.log(`Cart quantity: ${cartQuantity}`);
});

const order = document.getElementById('order');
order.addEventListener("click", () => {
  cartQuantity = cartQuantity;
  console.log(`Order Successful. Total: ${cartQuantity}`);
});


//Exercise
let name = 'Peter.';
console.log(`My name is ${name}`);

let cost = 5 + 3 + 3 + 9;
console.log(`Cost of food: $${cost}.`);

let tax = (5 + 3 + 3 + 9) * 0.1;
console.log(`Tax(10%): $${tax}.`);

let totalCost = cost + tax;
console.log(`Total Cost: $${totalCost}.`);

