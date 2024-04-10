// main creation
const main = document.createElement('div');
main.className = 'main';


// HEADER
const header = document.createElement('div');
header.className = 'header';

// h1
const heading = document.createElement('h1');
heading.textContent = 'Life Counter';


// COUNTER
const counter = document.createElement('div');
counter.className = 'counter';

// h3
const instruction = document.createElement('h3')
instruction.className = 'instruction';
instruction.textContent = 'ENTER YOUR AGE:';

// reset
const resetContainer = document.createElement('div');
resetContainer.className = 'resetContainer';

const reset = document.createElement('button');
reset.className = 'reset';
const icon = document.createElement('i');
icon.className = 'fa-solid fa-rotate-right';
icon.setAttribute('aria-hidden', 'true');
reset.appendChild(icon);


// wrapper
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const minus = document.createElement('button');
minus.className = 'minus';
minus.textContent = '-';

const num = document.createElement('span');
num.className = 'num';
num.textContent = '0';

const plus = document.createElement('button');
plus.className = 'plus';
plus.textContent = '+';


// span

const yourMonths = document.createElement('span');
yourMonths.className = 'yourMonths';
yourMonths.innerHTML = 'It\'s been <strong>0</strong> months'; 

const yourDays = document.createElement('span');
yourDays.className = 'yourDays';
yourDays.innerHTML = 'It\'s been <strong>0</strong> days'; 

const yourHours = document.createElement('span');
yourHours.className = 'yourHours';
yourHours.innerHTML = 'It\'s been <strong>0</strong> months'; 



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
counter.appendChild(instruction);
counter.appendChild(resetContainer);
counter.appendChild(wrapper);
counter.appendChild(yourMonths);
counter.appendChild(yourDays);
counter.appendChild(yourHours);

// Add elements to the wrapper
wrapper.appendChild(minus);
wrapper.appendChild(num);
wrapper.appendChild(plus);



// SOUNDS
const clickSound = new Audio('../assets/sound/click.mp3');
const clickReset = new Audio('../assets/sound/reset.mp3');


// Set counter
let i = 0;


// EVENTS
plus.addEventListener('click', ()=> {
  clickSound.play();
  i++;
  num.innerText = i;
  yourMonths.innerHTML = 'It\'s been <strong>' + formatMonths(months(i)) + '</strong> months already';
  yourDays.innerHTML = 'It\'s been <strong>' + formatDays(days(i)) + '</strong> days already';
  yourHours.innerHTML = 'It\'s been <strong>' + formatHours(hours(i)) + '</strong> hours already';
  message(i);
});

minus.addEventListener('click', ()=> {
  clickSound.play();
  if(i > 0) {
    i--;
    num.innerText = i;
    yourMonths.innerHTML = 'It\'s been <strong>' + formatMonths(months(i)) + '</strong> months already';
    yourDays.innerHTML = 'It\'s been <strong>' + formatDays(days(i)) + '</strong> days already';
    yourHours.innerHTML = 'It\'s been <strong>' + formatHours(hours(i)) + '</strong> hours already';
    message(i);
  }
});

reset.addEventListener('click', ()=> {
  clickReset.play();
  i = 0;
  num.innerText = i;
  yourMonths.innerHTML = 'It\'s been <strong>' + formatMonths(months(i)) + '</strong> months already';
  yourDays.innerHTML = 'It\'s been <strong>' + formatDays(days(i)) + '</strong> days already';
  yourHours.innerHTML = 'It\'s been <strong>' + formatHours(hours(i)) + '</strong> hours already';


});



// FUNCTIONS

function months(i) {
  if (i === 0) {
    return '0 months';
  } else {
    let months = i * 12;
    return months;
  }
}

function days(i) {
  if (i === 0) {
    return '0 days';
  } else {
    let days = i * 365;
    return days;
  }
}

function hours(i) {
  if (i === 0) {
    return '0 hours';
  } else {
    let hours = i * 365 * 24;
    return hours;
  }
}

function formatMonths(months) {
  return months.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatDays(days) {
  return days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatHours(hours) {
  return hours.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function message(i) {
  if(i == 100) {
    alert('100 - WOW! Congratulations');
} else if (i == 150) {
    alert('You\'re still alive?');  
} else if (i == '50') {
    alert('50 - Congratulations, you wear them very well!');
} else if (i == '18') {
    alert('18 - Now you\'re an adult');
}
}