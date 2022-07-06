var timeBlocks = document.getElementById("timeBlocks");
var currentDay = document.getElementById("currentDay");
//need data in for currentDay id.
function keepingTime(){
var now = moment().format('MMMM Do YYYY, HH:mm:ss ');
    currentDay.innerHTML = now;
console.log(now);
}
//setInterval keeps the seconds counting on the clock nested in the header.
setInterval(keepingTime, 1000);

var availTimeSlots = [
  "07:00 ",
  "08:00 ",
  "09:00 ",
  "10:00 ",
  "11:00 ",
  "12:00 ",
  "13:00 ",
  "14:00 ",
  "15:00 ",
  "16:00 ",
  "17:00 ",
  "18:00 ",
  "19:00 ",
  "20:00 "

];

//generates dynamic rows of time slots when called.
getTimeBlocks();

function getTimeBlocks() {
  timeBlocks.innerHTML = "";
// loop iterates for the length of times available in array
  for (var i = 0; i < availTimeSlots.length; i++) {
    var hourBlock = availTimeSlots[i];
//built dynamic rows which read from availTimeSlots array
    var row = document.createElement("div");
    row.classList.add("row");
    timeBlocks.appendChild(row);

    var hour = document.createElement("div");
    hour.innerHTML = hourBlock;
    hour.classList.add("hour");
    row.appendChild(hour);
//textarea created to capture appointment details and make accessible to local storage.
    var textarea = document.createElement("textarea");
    textarea.placeholder = "Enter remarks here";
    textarea.setAttribute("class", "col-10");
    textarea.setAttribute("id", i);
    row.appendChild(textarea);
//save btn will record values and reserve the time slot.
    var saveBtn = document.createElement("button");
    // var saveBtnIcon = document.createElement("span");
    // saveBtnIcon.setAttribute("class", "oi oi-plus");
    // 
    saveBtn.innerHTML = `Save `;
    saveBtn.classList.add("saveBtn");
    saveBtn.setAttribute("value", i);
    row.appendChild(saveBtn);
    // saveBtn.appendChild(saveBtnIcon);
  }
}

$(document).on('click','.saveBtn',function(event){
    task = JSON.stringify(event.target.previousSibling.value)
    id = JSON.stringify(event.target.previousSibling.id)
    localStorage.setItem(id, task);
});


function getStorage(){
var textAreas = document.getElementsByTagName('textarea')
console.log(textAreas)
for (var index = 0; index < textAreas.length; index++) {
    var key = index
    var storage = localStorage.getItem(`"${key}"`)
    if (storage != ""){
        textAreas[index].value = storage
    }    
    }
}
getStorage()

function realTimeBlocks() {
    var getHour = moment().format('HH:mm');
    console.log(getHour)
    // HH required for color function to work with logic and CSS.
    var thisHour = moment(getHour, 'HH');
    console.log(thisHour)
    var tenseStatus = document.getElementsByClassName('col-10')
    
    for (var i = 0; i < tenseStatus.length; i++) {
        var timeBlock = moment(availTimeSlots[i], 'HH');
        if (thisHour.isSame(timeBlock) === true) {
            tenseStatus [i].classList.add('present')
            tenseStatus [i].classList.remove('future')
            tenseStatus [i].classList.remove('past')
        } else if (thisHour.isBefore(timeBlock) === true) {
            tenseStatus [i].classList.add('future')
            tenseStatus [i].classList.remove('past')
            tenseStatus [i].classList.remove('present')
        } else if (thisHour.isBefore(timeBlock) === false) {
            tenseStatus [i].classList.add('past')
            tenseStatus [i].classList.remove('future')
            tenseStatus [i].classList.remove('present')
        }
    }
} 
realTimeBlocks()
setInterval(realTimeBlocks, 20000);
// checks time every 20 secs.

