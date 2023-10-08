const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl =  document.getElementById('date-picker');


// setting date input min to todays date, this will give todays data and populate it in html

const today = new Date().toISOString().split('T')[0]
dateEl.setAttribute('min', today)