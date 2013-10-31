var today = new Date()
var dateRecord = today.clone()

function display(date) {
  var weekArray = date.clone().toWeekDays()

  var weekString = "<div class='week'>"

  for (var day in weekArray) {
    weekString += "<div class='day' id='" + day + "' onClick='calDistance()'>" + weekArray[day].toString("ddd") + "<br>" + weekArray[day].toString("d") + "</div>"
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
  document.getElementById("monthAndYear").innerHTML = dateRecord.toString("MMMM") + " " + dateRecord.toString("yyyy")
}

function calDistance() {
  var currentID = window.event.srcElement.id
  var weekArray = dateRecord.toWeekDays()
  document.getElementById("dateDistance").innerHTML = weekArray[currentID].toString("dddd")
}