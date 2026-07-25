// DOM combines Javascript and HTMl together. It give Javascript full control of the webpage

// document.body.innerHTML = 'hello';
// document.title = 'Ready'; // Changes the title

// console.log(document.title);

// document.body.innerHTML = '<button>Click</button>'; // Replace all HTML inside the body

// querySelector lets us get any element and put in Javascript.
// console.log(document.querySelector('button')) //

// document.querySelector('button').innerHTML = 'Subscribe';
// document.querySelector('.js-btn').innerHTML ; // Selects element with a class

// const btnElem = document.querySelector('.js-btn').innerHTML = 'Unfollow';
// const newBtn = btnElem;
// console.log(newBtn);

//PROJECT

const subscribeBtn = document.querySelector('.subscribe-btn');
subscribeBtn.addEventListener("click", () => {
  subscribeBtn.innerHTML === 'Subscribe' ?
    subscribeBtn.innerHTML = 'Subscribed'
    : subscribeBtn.innerHTML = 'Subscribe';
});