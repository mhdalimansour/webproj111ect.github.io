function displayMessage() {
  alert("You clicked the button!");
}
function toggleSchedule() {
  var scheduleTable = document.getElementById("schedule-table");
  if (scheduleTable.style.display === "none") {
    scheduleTable.style.display = "table";
  } else {
    scheduleTable.style.display = "none";
  }
}
