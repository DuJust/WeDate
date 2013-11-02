var today = new Date()
var dateRecord = today.clone()

function display(date) {
  displayWeekday(dateRecord.getDay())

  var weekArray = date.clone().toWeekDays()
  var weekString = "<div class='week'>"
  for (var day in weekArray) {
    weekString += "<div class='date' id='" + day + "' onClick='dateDistance()'>"
    weekString += "<div class='day'>" + weekArray[day].toString("ddd") + "</div>"
    weekString += "<div class='dateNumber'>" + weekArray[day].toString("d") + "</div>"
    weekString += "</div>"
  }

  weekString += "</div>"

  displayMonthAndYear()
  document.getElementById("calendar").innerHTML = weekString
}

function displayNextWeek() {
  display(dateRecord.add(7).days())
}

function displayPreviousWeek() {
  display(dateRecord.add(-7).days())
}

function displayThisWeek() {
  display(dateRecord = today.clone())
}

function displayMonthAndYear() {
  var monthAndYear = "<div class='monthAndYear'>" + dateRecord.toString("MMMM") + " " + dateRecord.toString("yyyy") + "</div>"
  document.getElementById("monthAndYear").innerHTML = monthAndYear
}

function displayWeekday(id) {
  var weekArray = dateRecord.toWeekDays()
  var weekdayString = "<div class='weekday'>" + weekArray[id].toString("dddd") + "</div>"
  document.getElementById("dateDistance").innerHTML = weekdayString
}

function dateDistance() {
  var currentID = window.event.srcElement.parentElement.id
  displayWeekday(currentID);
}