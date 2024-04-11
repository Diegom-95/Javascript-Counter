
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

const spanContainer = document.createElement('div');
spanContainer.className = 'spanContainer';

const yourMonths = document.createElement('span');
yourMonths.className = 'yourMonths';
yourMonths.innerHTML = 'Months: <strong>0</strong>'; 

const yourDays = document.createElement('span');
yourDays.className = 'yourDays';
yourDays.innerHTML = 'Days: <strong>0</strong>'; 

const yourHours = document.createElement('span');
yourHours.className = 'yourHours';
yourHours.innerHTML = 'Hours: <strong>0</strong>'; 



// footer

const footer = document.createElement('div');
footer.className = 'footer';

const footerText = document.createElement('p');
footerText.textContent = '@Diego Maggioni';

const githubIcon = document.createElement('i');
githubIcon.className = 'fa-brands fa-github';
githubIcon.addEventListener('click', function() {
  window.location.href = 'https://github.com/Diegom-95';
});





// Add main and footer to the document
document.body.appendChild(main);
document.body.appendChild(footer);


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
counter.appendChild(spanContainer);

//Add span elements to the span div
spanContainer.appendChild(yourMonths);
spanContainer.appendChild(yourDays);
spanContainer.appendChild(yourHours);

// Add elements to the wrapper
wrapper.appendChild(minus);
wrapper.appendChild(num);
wrapper.appendChild(plus);

// Add elements to the footer
footer.appendChild(footerText);
footer.appendChild(githubIcon);




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
  yourMonths.innerHTML = 'Months: <strong>' + formatMonths(months(i)) + '</strong> ';
  yourDays.innerHTML = 'Days: <strong>' + formatDays(days(i)) + '</strong>';
  yourHours.innerHTML = 'Hours: <strong>' + formatHours(hours(i)) + '</strong>';
  message(i);
});

minus.addEventListener('click', ()=> {
  clickSound.play();
  if(i > 0) {
    i--;
    num.innerText = i;
    yourMonths.innerHTML = 'Months: <strong>' + formatMonths(months(i)) + '</strong>';
    yourDays.innerHTML = 'Days: <strong>' + formatDays(days(i)) + '</strong>';
    yourHours.innerHTML = 'Hours: <strong>' + formatHours(hours(i)) + '</strong>';
    message(i);
  }
});

reset.addEventListener('click', ()=> {
  clickReset.play();
  i = 0;
  num.innerText = i;
  yourMonths.innerHTML = 'Months: <strong>' + formatMonths(months(i)) + '</strong>';
  yourDays.innerHTML = 'Days: <strong>' + formatDays(days(i)) + '</strong>';
  yourHours.innerHTML = 'Hours: <strong>' + formatHours(hours(i)) + '</strong>';
});



// FUNCTIONS

function months(i) {
  if (i === 0) {
    return 0; // restituisce un numero invece di una stringa
  } else {
    let months = i * 12;
    return months;
  }
}

function days(i) {
  if (i === 0) {
    return 0; // restituisce un numero invece di una stringa
  } else {
    let days = i * 365;
    return days;
  }
}

function hours(i) {
  if (i === 0) {
    return 0; // restituisce un numero invece di una stringa
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