
var todayEl = moment().format('dddd, MMMM Do YYYY')
var containerEl = document.querySelector(".container")

// displays current day and date in header 
document.getElementById("currentDay").innerText = todayEl

var row9am = moment('10 00').format('hh:mm')

var row = [{
    hour : "time",
    event : "event",
    save : "save",
}]

function addRows (){
    for (var i=0; i < 9; i++){

        var row1 = [{
            hour : "time",
            event : arrary[0],
            save : "save",
        }]
    }
}

addRows()

var array = ["t","10am","11am"]