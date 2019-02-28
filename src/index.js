
import './sass/styles.scss';

console.log("hey!");


var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timerDay").innerHTML = days;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerDay").innerHTML = "EXPIRED";
  }
  document.getElementById("timerHour").innerHTML = hours;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerHour").innerHTML = "EXPIRED";
  }
  document.getElementById("timerMinute").innerHTML = minutes;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerMinute").innerHTML = "EXPIRED";
  }
  document.getElementById("timerSecond").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerSecond").innerHTML = "EXPIRED";
  }
}, 1000);
