
var todayEl = moment().format('dddd, MMMM Do YYYY')
var containerEl = document.querySelector(".container")

var time9 = document.getElementById("9am")
var button9 = document.querySelector("#btn9")
var time9 = document.getElementById("event9")

var time10 = document.getElementById("10am")
var time11 = document.getElementById("11am")
var time12 = document.getElementById("12pm")
var time1 = document.getElementById("1pm")
var time2 = document.getElementById("2pm")
var time3 = document.getElementById("3pm")
var time4 = document.getElementById("4pm")
var time5 = document.getElementById("5pm")


// displays current day and date in header 
document.getElementById("currentDay").innerText = todayEl

var timeRN = moment().format("H")

if( timeRN > 19){
    document.getElementById("event9").classList.add("past");
}if( timeRN < 19){
    document.getElementById("event9").classList.add("future");
}if(timeRN == 19 ) {
    document.getElementById("event9").classList.add("present");
}

console.log(timeRN)