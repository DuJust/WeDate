$(document).ready(function () {
  var today = new Date()
  var dateRecord = today.clone()

  function display(date) {
    $('.calendar').empty()
    displayMonthAndYear()
    var weekArray = date.clone().toWeekDays()
    var week = $("<div class='week' id='week'></div>")
    for (var day in weekArray) {
      var date = $("<div class='date' id='" + day + "'></div>")
      date.append("<div class='day'>" + weekArray[day].toString("ddd") + "</div>")
      date.append("<div class='dateNumber'>" + weekArray[day].toString("d") + "</div>")
      week.append(date)
    }

    $('.calendar').append(week)
    displayWeekday(dateRecord.getDay())
  }

  function displayWeekday(id) {
    var weekArray = dateRecord.toWeekDays()
    var week = $("<div class='weekday'>" + weekArray[id].toString("dddd") + "</div>")
    $(".dateDistance").html(week)
    displayWeekdayColor(id);
  }

  function displayWeekdayColor(id) {
    $('.date').css('color', 'darkgray')
    $('#' + id).css('color', 'crimson')
  }

  function displayMonthAndYear() {
    var monthAndYear = $("<div class='monthAndYear'>" + dateRecord.toString("MMMM") + " " + dateRecord.toString("yyyy") + "</div>")
    $('.calendar').append(monthAndYear)
  }

  $('.date').click(function(){
    debugger
    display(this.id)
    var weekArray = dateRecord.toWeekDays()
    dateRecord = weekArray[this.id]
  })

  $('.thisWeek').click(function(){
    display(dateRecord = today.clone())
  })

  $('.nextWeek').click(function(){
    dateRecord.toNextWeekDays()
    display(dateRecord)
  })

  $('.previousWeek').click(function(){
    dateRecord.toPreviousWeekDays()
    display(dateRecord)
  })

  display(dateRecord)
})
