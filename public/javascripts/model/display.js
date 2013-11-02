var today = new Date()
var dateRecord = today.clone()

function display(date) {
  var weekArray = date.clone().toWeekDays()
  var weekString = "<div class='week' id='week'>"
  for (var day in weekArray) {
    weekString += "<div class='date' id='" + day + "' onClick='displayToday()'>"
    weekString += "<div class='day'>" + weekArray[day].toString("ddd") + "</div>"
    weekString += "<div class='dateNumber'>" + weekArray[day].toString("d") + "</div>"
    weekString += "</div>"
  }

  weekString += "</div>"
  document.getElementById("calendar").innerHTML = weekString
  displayWeekday(dateRecord.getDay())
  displayMonthAndYear()
}

function displayNextWeek() {
  dateRecord.toNextWeekDays()
  display(dateRecord)
}

function displayPreviousWeek() {
  dateRecord.toPreviewWeekDays()
  display(dateRecord)
}

function displayThisWeek() {
  display(dateRecord = today.clone())
}

function displayMonthAndYear() {
  var monthAndYear = "<div class='monthAndYear'>" + dateRecord.toString("MMMM") + " " + dateRecord.toString("yyyy") + "</div>"
  document.getElementById("monthAndYear").innerHTML = monthAndYear
}

function displayWeekdayColor(id) {
  var elements = document.getElementsByClassName('date')
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.color = 'darkgray'
  }
  elements[id].style.color = 'crimson'
}
function displayWeekday(id) {
  var weekArray = dateRecord.toWeekDays()
  var weekdayString = "<div class='weekday'>" + weekArray[id].toString("dddd") + "</div>"
  document.getElementById("dateDistance").innerHTML = weekdayString
  displayWeekdayColor(id);
}

function displayToday() {
  var element = window.event.srcElement.parentElement
  displayWeekday(element.id)
}