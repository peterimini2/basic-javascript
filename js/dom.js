/*
DOM combines Javascript and HTMl together.It give Javascript full control of the webpage

document.body.innerHTML = 'hello';
document.title = 'Ready'; // Changes the title

console.log(document.title);

document.body.innerHTML = '<button>Click</button>'; // Replace all HTML inside the body

querySelector lets us get any element and put in Javascript.
console.log(document.querySelector('button')) //

document.querySelector('button').innerHTML = 'Subscribe';
document.querySelector('.js-btn').innerHTML ; // Selects element with a class

const btnElem = document.querySelector('.js-btn').innerHTML = 'Unfollow';
const newBtn = btnElem;
console.log(newBtn);
*/

//PROJECT

const subscribeBtn = document.querySelector('.subscribe-btn');
subscribeBtn.addEventListener("click", () => {
  subscribe();
});

function subscribe() {
  if (subscribeBtn.textContent === 'Subscribe') {
    subscribeBtn.textContent = 'Subscribed';
    subscribeBtn.classList.add('is-subscribed');
  } else {
    subscribeBtn.innerHTML = 'Subscribe';
    subscribeBtn.classList.remove('is-subscribed');
  }
}

//Cost of Order
const orderInput = document.querySelector('.order-input');
const calcBtn = document.querySelector('.calc-btn');
const totalCost = document.querySelector('.cost');

calcBtn.addEventListener("click", () => {
  calculateTotal();
})

orderInput.addEventListener("keydown", () => {
  if(event.key === "Enter") {
  calculateTotal();
  }
})

function calculateTotal() {
  let cost = Number(orderInput.value);

  if (orderInput.value.trim() === "") {
    totalCost.innerHTML = 'Please input cost of order.'
  } else if (cost < 40) {
    totalCost.innerHTML = `$${ cost + 10 }`
  } else {
    totalCost.innerHTML = `$${cost}`
  }
}