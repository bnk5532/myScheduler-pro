var timeBlocks = document.getElementById("timeBlocks");

var availTimeSlots = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",

];

getTimeBlocks();

function getTimeBlocks() {
  timeBlocks.innerHTML = "";

  for (var i = 0; i < availTimeSlots.length; i++) {
    var hourBlock = availTimeSlots[i];

    var row = document.createElement("div");
    row.classList.add("row");
    timeBlocks.appendChild(row);

    var hour = document.createElement("div");
    hour.innerHTML = hourBlock;
    hour.classList.add("hour");
    row.appendChild(hour);

    var textarea = document.createElement("textarea");
    textarea.placeholder = "Enter your text here";
    textarea.setAttribute("class", "description");
    textarea.setAttribute("id", i);
    row.appendChild(textarea);

    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("saveBtn");
    saveBtn.setAttribute("value", i);
    row.appendChild(saveBtn);
  }
}
