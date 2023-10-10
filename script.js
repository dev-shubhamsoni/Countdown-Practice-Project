const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// setting date input min to todays date, this will give todays data and populate it in html

const today = new Date().toISOString().split('T')[0]
dateEl.setAttribute('min', today)

function updateDOM() {
  countdownActive = setInterval(() => {

    const now = new Date().getTime();
    const distanceBWtime = countdownValue - now;

    const days = Math.floor(distanceBWtime / day);
    const hours = Math.floor((distanceBWtime % day) / hour);
    const minutes = Math.floor((distanceBWtime % hour) / minute);
    const seconds = Math.floor((distanceBWtime % minute) / second);

    // populating countdown

    countdownElTitle.textContent = countdownTitle;
    timeElements[0].textContent = days;
    timeElements[1].textContent = hours;
    timeElements[2].textContent = minutes;
    timeElements[3].textContent = seconds;

    //hiding div

    inputContainer.hidden = true;
    countdownEl.hidden = false;

  }, second);
}

// Taking values from FORM

function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);


  countdownValue = new Date(countdownDate).getTime()
  console.log(countdownValue);

  updateDOM();
}




countdownForm.addEventListener('submit', updateCountdown)
countdownBtn.addEventListener('click', reset);