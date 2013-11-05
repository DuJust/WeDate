$(document).ready(function () {
  var today = new Date()
  var dateRecord = today.clone()

  var LEFT = 1
  var RIGHT = -1

  function createWeek(date) {
    var weekArray = date.clone().toWeekDays()
    var week = $("<div class='week' id='week'></div>")
    for (var day in weekArray) {
      var date = $("<div class='date' id='" + day + "'></div>")
      date.append("<div class='day'>" + weekArray[day].toString("ddd") + "</div>")
      date.append("<div class='dateNumber'>" + weekArray[day].toString("d") + "</div>")
      week.append(date)
    }
    week.css({'width': $(window).width()})
    return week
  }

  function weekAnimate(date, forward) {
    $('.weeks').animate({
      left: forward * $(window).width(),
      width: $(window).width(),
      height: $('.weeks').height()
    }, "fast", function () {
      display(date)
    })
  }

  function displayDates(date) {
    var weeks = $("<div class='weeks'></div>").append(createWeek(date))
    weeks.css({'width': $(window).width() * 2, 'position': 'relative'})
    $('.calendar').append(weeks)

    $('.week').on('swipeleft', function () {
      date.toNextWeekDays()
      $(this).after(createWeek(date))
      weekAnimate(date, RIGHT)
    })

    $('.week').on('swiperight', function () {
      date.toPreviousWeekDays()
      $(this).before(createWeek(date))
      $('.weeks').css({'left': -$(window).width()})
      weekAnimate(date, LEFT)
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
    var week = $("<div class='weekday'>" + date.compare(today) + "</div>")
    week.css('display', 'none')
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
