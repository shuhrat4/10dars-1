
const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

let currentLight = 'red';

function changeLight() {
  if (currentLight === 'red') {
    redLight.style.backgroundColor = '#333';
    yellowLight.style.backgroundColor = 'yellow';
    currentLight = 'yellow';
  } else if (currentLight === 'yellow') {
    yellowLight.style.backgroundColor = '#333';
    greenLight.style.backgroundColor = 'green';
    currentLight = 'green';
  } else if (currentLight === 'green') {
    greenLight.style.backgroundColor = '#333';
    redLight.style.backgroundColor = 'red';
    currentLight = 'red';
  }
}

setInterval(changeLight, 2000); 