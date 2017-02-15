const secHand = document.querySelector('.sec');
const minHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

function setTime() {
  const now = new Date();

  const seg = now.getSeconds();
  const segDegrees = ((seg / 60) * 360) + 90;
  secHand.style.transform = `rotate(${segDegrees}deg)`;

  const min = now.getMinutes();
  const minDegrees = ((min / 60) * 360) + ((seg / 60) * 6) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setTime, 1000);
setTime();
