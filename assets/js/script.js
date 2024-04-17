// Function to create DOM elements
function createElement(tagName, className, innerHTML) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
}


// CREATION OF DOM ELEMENTS

// Main
const main = createElement('div', 'main');
// Header
const header = createElement('div', 'header');
const heading = createElement('h1', null, 'LIFE COUNTER');
// Counter
const counter = createElement('div', 'counter');
const instruction = createElement('h3', 'instruction', 'ENTER YOUR AGE:');
// Reset
const resetContainer = createElement('div', 'resetContainer');
const reset = createElement('button', 'reset');
const icon = createElement('i', 'fa-solid fa-rotate-right');
icon.setAttribute('aria-hidden', 'true');
reset.appendChild(icon);
// Wrapper
const wrapper = createElement('div', 'wrapper');
const minus = createElement('button', 'minus', '-');
const num = createElement('span', 'num', '0');
const plus = createElement('button', 'plus', '+');
// Span
const spanContainer = createElement('div', 'spanContainer');
const yourMonths = createElement('span', 'yourMonths', 'Months: <strong>0</strong>');
const yourDays = createElement('span', 'yourDays', 'Days: <strong>0</strong>');
const yourHours = createElement('span', 'yourHours', 'Hours: <strong>0</strong>');
// Footer
const footer = createElement('div', 'footer');
const footerText = createElement('p', null, '@Diego Maggioni');
const githubIcon = createElement('i', 'fa-brands fa-github');
githubIcon.setAttribute('onclick', "window.open('https://github.com/Diegom-95', '_blank', 'noopener')");


// Adding elements to the DOM
document.body.appendChild(main);
document.body.appendChild(footer);
main.appendChild(header);
main.appendChild(counter);
header.appendChild(heading);
resetContainer.appendChild(reset);
counter.appendChild(instruction);
counter.appendChild(resetContainer);
counter.appendChild(wrapper);
counter.appendChild(spanContainer);
spanContainer.appendChild(yourMonths);
spanContainer.appendChild(yourDays);
spanContainer.appendChild(yourHours);
footer.appendChild(footerText);
footer.appendChild(githubIcon);
wrapper.appendChild(minus);
wrapper.appendChild(num);
wrapper.appendChild(plus);


// SOUNDS
const clickSound = new Audio('../assets/sound/click.mp3');
const clickReset = new Audio('../assets/sound/reset.mp3');


// Set counter
let i = 0;


// LISTENER

// Add listener for the reset button
reset.addEventListener('click', () => {
  clickReset.play();
  i = 0;
  num.innerText = i;
  updateCounter(i);
});


// Add listener for plus and minus buttons
wrapper.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('plus')) {
    clickSound.play();
    i++;
    num.innerText = i;
    updateCounter(i);
  } else if (target.classList.contains('minus')) {
    clickSound.play();
    if (i > 0) {
      i--;
      num.innerText = i;
      updateCounter(i);
    }
  }
});

// FUNCTIONS

// Update counter
function updateCounter(value) {
  yourMonths.innerHTML = 'Months: <strong>' + formatTimeUnit(calculateTimeUnits(value, 'months')) + '</strong> ';
  yourDays.innerHTML = 'Days: <strong>' + formatTimeUnit(calculateTimeUnits(value, 'days')) + '</strong>';
  yourHours.innerHTML = 'Hours: <strong>' + formatTimeUnit(calculateTimeUnits(value, 'hours')) + '</strong>';
  message(value);
}

// Calculate time units
function calculateTimeUnits(i, unit) {
  if (i === 0) {
    return 0;
  } else {
    let result = 0;
    switch (unit) {
      case 'months':
        result = i * 12;
        break;
      case 'days':
        result = i * 365;
        break;
      case 'hours':
        result = i * 365 * 24;
        break;
      default:
        result = 0;
        break;
    }
    return result;
  }
}

// Insert a dot every three digits.
function formatTimeUnit(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Alert message
function message(i) {
  if (i == 100) {
    alert('100 - WOW! Congratulations');
  } else if (i == 150) {
    alert('You\'re still alive?');  
  } else if (i == '50') {
    alert('50 - Congratulations, you wear them very well!');
  } else if (i == '18') {
    alert('18 - Now you\'re an adult');
  }
}