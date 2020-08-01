
var todayEl = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


document.getElementById("currentDay").innerText = "Today is: " + days[todayEl.getDay()] +", " + months[todayEl.getMonth()] + " " + todayEl.getDate() + ", " + todayEl.getFullYear();





