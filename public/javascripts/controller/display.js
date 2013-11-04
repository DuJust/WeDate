$(document).ready(function () {
  var today = new Date()
  var dateRecord = today.clone()

  function createWeek(date) {
    var weekArray = date.clone().toWeekDays()
    var week = $("<div class='week' id='week'></div>")
    for (var day in weekArray) {
      var date = $("<div class='date' id='" + day + "'></div>")
      date.append("<div class='day'>" + weekArray[day].toString("ddd") + "</div>")
      date.append("<div class='dateNumber'>" + weekArray[day].toString("d") + "</div>")
      week.append(date)
    }
    week.css('width',$(window).width())
    return week
  }

  function displayDates(date) {
    var week = createWeek(date)
    $('.calendar').append(week)

    $('.week').on('swipeleft', function () {
      date.toNextWeekDays()
      display(date)
    })

    $('.week').on('swiperight', function () {
      date.toPreviousWeekDays()
      display(date)
    })

    $('.date').click(function () {
      var weekArray = date.toWeekDays()
      date = weekArray[this.id]
      display(date)
    })
  }

  function display(date) {
    $('.calendar').empty()
    displayMonthAndYear(date)
    displayDates(date);
    displayWeekday(date)
  }

  display(dateRecord.clone())

  function displayWeekday(date) {
    var week = $("<div class='weekday' style='display: none'>" + date.compare(today) + "</div>")
    $(".monthAndYear").after(week)

    $('.weekday').fadeIn("slow")
    displayWeekdayColor(date.getDay());
  }

  function displayWeekdayColor(id) {
    $('.date').css('color', 'darkgray')
    $('#' + id).css('color', 'crimson')
  }

  function displayMonthAndYear(date) {
    var monthAndYear = $("<div class='monthAndYear'>" + date.toString("MMMM") + " " + date.toString("yyyy") + "</div>")
    $('.calendar').append(monthAndYear)

    $('.monthAndYear').click(function () {
      display(dateRecord = today.clone())
    })
  }

})
