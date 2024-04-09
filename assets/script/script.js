// main creation
const main = document.createElement('div');
main.className = 'main';


// div header creation
const header = document.createElement('div');
header.className = 'header';

// Create h1 inside header
const heading = document.createElement('h1');
heading.textContent = 'The Counter';


// div counter creation
const counter = document.createElement('div');
counter.className = 'counter';

// div reset creation
const resetContainer = document.createElement('div');
resetContainer.className = 'resetContainer';

// Add button to reset div
const reset = document.createElement('button');
reset.className = 'reset';
const icon = document.createElement('i');
icon.className = 'fa-solid fa-rotate-right';
icon.setAttribute('aria-hidden', 'true');
reset.appendChild(icon);


// Create wrapper div
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

// Add buttons to the wrapper div
const minus = document.createElement('button');
minus.className = 'minus';
minus.textContent = '-';

const num = document.createElement('span');
num.className = 'num';
num.textContent = '00';

const plus = document.createElement('button');
plus.className = 'plus';
plus.textContent = '+';



// Add main to the document
document.body.appendChild(main);

// Add div header and counter to the main div
main.appendChild(header);
main.appendChild(counter);

// Add h1 to the header
header.appendChild(heading);

// Add reset button to reset div
resetContainer.appendChild(reset);

// Add elements to the counter div
counter.appendChild(resetContainer);
counter.appendChild(wrapper);

// Add elements to the wrapper
wrapper.appendChild(minus);
wrapper.appendChild(num);
wrapper.appendChild(plus);



// SOUNDS
const clickSound = new Audio('../assets/sound/click.mp3');
const clickReset = new Audio('../assets/sound/reset.mp3');


// Set counter
let i = 0;


// Events
plus.addEventListener('click', ()=> {
  clickSound.play();
  i++;
  i = (i < 10) ? '0' + i : i;
  num.innerText = i;
});

minus.addEventListener('click', ()=> {
  clickSound.play();
  if(i > 0) {
    i--;
    i = (i < 10) ? '0' + i : i;
    num.innerText = i;
  }
});

reset.addEventListener('click', ()=> {
  clickReset.play();
  i = 0;
  num.innerText = i;
});