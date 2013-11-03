$(document).ready(function () {
  var today = new Date()
  var dateRecord = today.clone()

  function displayDates(date) {
    var weekArray = date.clone().toWeekDays()
    var week = $("<div class='week' id='week'></div>")
    for (var day in weekArray) {
      var date = $("<div class='date' id='" + day + "'></div>")
      date.append("<div class='day'>" + weekArray[day].toString("ddd") + "</div>")
      date.append("<div class='dateNumber'>" + weekArray[day].toString("d") + "</div>")
      week.append(date)
    }
    $('.calendar').append(week)

    $('.date').click(function () {
      var weekArray = dateRecord.toWeekDays()
      dateRecord = weekArray[this.id]
      display(dateRecord)
    })
  }

  function display(date) {
    $('.calendar').empty()
    displayMonthAndYear(date)
    displayDates(date);
    displayWeekday(dateRecord.getDay())
  }
  display(dateRecord)

  function displayWeekday(id) {
    var weekArray = dateRecord.toWeekDays()
    var week = $("<div class='weekday'>" + weekArray[id].toString("dddd") + "</div>")
    $(".monthAndYear").after(week)
    displayWeekdayColor(id);
  }

  function displayWeekdayColor(id) {
    $('.date').css('color', 'darkgray')
    $('#' + id).css('color', 'crimson')
  }

  function displayMonthAndYear(date) {
    var monthAndYear = $("<div class='monthAndYear'>" + date.toString("MMMM") + " " + date.toString("yyyy") + "</div>")
    $('.calendar').append(monthAndYear)

    $('.monthAndYear').click(function(){
      display(dateRecord = today.clone())
    })
  }

  $('.nextWeek').click(function(){
    dateRecord.toNextWeekDays()
    display(dateRecord)
  })

  $('.previousWeek').click(function(){
    dateRecord.toPreviousWeekDays()
    display(dateRecord)
  })

  $('.week').bind('swipeleft',function(){
    dateRecord.toNextWeekDays()
    display(dateRecord)
  })
})
