//parallex

let bg = document.getElementById('background');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');
let range = document.getElementById('myRange');

window.addEventListener('scroll', (e) => {
  var value = window.scrollY;
  range.value = value;
  bg.style.top = `${value * 0.6}px`;
  moon.style.left = `${value * 0.6}px`;
  mountain.style.top = `${value * 0.16}px`;
  text.style.bottom = `${value * 1}px`;
});

const scrolling = (value) => {
  window.scrollBy(value, value);
};
