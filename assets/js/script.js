var timeBlocks = document.getElementById("timeBlocks");
var currentDay = document.getElementById("currentDay");

//need data in for currentDay id.

var availTimeSlots = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",

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
    textarea.placeholder = "Enter notes here";
    textarea.setAttribute("class", "tenses");
    textarea.setAttribute("class", "col-10"); 
    textarea.setAttribute("id", i);
    row.appendChild(textarea);
//save btn will record values and reserve the time slot.
    var saveBtn = document.createElement("button");
    // var saveBtnIcon = document.createElement("span");
    // saveBtnIcon.setAttribute("class", "oi oi-plus");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("saveBtn");
    saveBtn.setAttribute("value", i);
    row.appendChild(saveBtn);
    // saveBtn.appendChild(saveBtnIcon);
  }
}



function realTimeBlocks() {
    var getHour = moment().format('HH:mm');
    console.log(getHour)
    var thisHour = moment(getHour, 'HH:mm');
    var tenseStatus = document.getElementsByClassName('tenses')
    
    for (var i = 0; i < tenseStatus.length; i++) {
        var timeBlock = moment(availTimeSlots[i], 'HH:mm');
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
setInterval(realTimeBlocks, 10000);
