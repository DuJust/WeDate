var today = new Date()
var dateRecord = today.clone()

function display(date) {
  var weekArray = date.clone().toWeekDays()

  var weekString = "<div class='week'>"

  for (var day in weekArray) {
    weekString += "<div class='day'>" + weekArray[day].toString("ddd") + "<br>" + weekArray[day].toString("d") + "</div>"
  }
  weekString += "</div>"
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
