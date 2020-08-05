
var todayEl = moment().format('dddd, MMMM Do YYYY')
var containerEl = document.querySelector(".container")
var time9 = document.getElementById("event9")
var time10 = document.getElementById("event10")
var time11 = document.getElementById("event11")
var time12 = document.getElementById("event12")
var time1 = document.getElementById("event1")
var time2 = document.getElementById("event2")
var time3 = document.getElementById("event3")
var time4 = document.getElementById("event4")
var time5 = document.getElementById("event5")

//retrieves "time attribute value"
var timeValue = document.querySelectorAll(".description")[0].getAttribute("time")


// displays current day and date in header 
document.getElementById("currentDay").innerText = todayEl

//gets the hour value from current time//
var timeRN = moment().format("H")
console.log(timeRN)
//sets class to format depending on current time
if( timeRN> timeValue){
    time9.classList.add("past");
}
if( timeRN < 19){
    time9.classList.add("future");
}
if(timeRN == 19 ) {
    time9.classList.add("present");
}

//retrives values from local storage when refreshed//
retrieve()
function retrieve() {
    time9.value = localStorage.getItem("9am")
    time10.value = localStorage.getItem("10am")
    time11.value = localStorage.getItem("11am")
    time12.value = localStorage.getItem("12pm")
    time1.value = localStorage.getItem("1pm")
    time2.value = localStorage.getItem("2pm")
    time3.value = localStorage.getItem("3pm")
    time4.value = localStorage.getItem("4pm")
    time5.value = localStorage.getItem("5pm")
}

// buttons click event saves text input to local storage//
$("#btn9").on("click", function () {
    console.log("button works");
    localStorage.setItem("9am",time9.value)
})
$("#btn10").on("click", function () {
    localStorage.setItem("10am",time10.value)
})
$("#btn11").on("click", function () {
    localStorage.setItem("11am",time11.value)
})
$("#btn12").on("click", function () {
    localStorage.setItem("12pm",time12.value)
})
$("#btn1").on("click", function () {
    localStorage.setItem("1pm",time1.value)
})
$("#btn2").on("click", function () {
    localStorage.setItem("2pm",time2.value)
})
$("#btn3").on("click", function () {
    localStorage.setItem("3pm",time3.value)
})
$("#btn4").on("click", function () {
    localStorage.setItem("4pm",time4.value)
})
$("#btn5").on("click", function () {
    localStorage.setItem("5pm",time5.value)
})