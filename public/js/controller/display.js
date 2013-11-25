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
    week.hide()
    return week
  }

  function createMonth(date) {
    var monthArray = date.clone().toMonthWeeks()
    var month = $("<div class='month' id='month'></div>")
    for(var j in monthArray){
      var week = $("<div class='week' id='week'></div>")
      var weekArray = monthArray[j]
      for (var i in weekArray) {
        var day = $("<div class='date' id='" + (weekArray[i].getDate()-1) + "'></div>")
        day.append("<div class='day'>" + weekArray[i].toString("ddd") + "</div>")
        day.append("<div class='dateNumber'>" + weekArray[i].toString("d") + "</div>")
        week.append(day)
      }
      month.append(week)
    }
    month.css({'display': 'none'})
    return month
  }

  function weekAnimate(date, forward) {
    var week = $('.week')
    week.marginLeft = forward * $(window).width()
    week.animate({
      marginLeft: forward * $(window).width(),
      height: week.height()
    }, "fast", function () {
      display(date)
    })
  }

  function displayDates(date) {
    var calendar = $('.calendar');
    calendar.append(createWeek(date))
    var week = $('.week')
    var navigate = $("<div class='navigate'> </div>")
    navigate.append("<div class='arrow_frame' id='previous_week'> <div class='arrow_up'> </div> </div>")
    navigate.append("<div class='arrow_frame' id='next_week'> <div class='arrow_down'> </div> </div>")
    navigate.height(week.height())
    week.show();
    week.after(navigate)

    week.hammer().on('dragleft', function () {
      date.toNextWeekDays()
      week.after(createWeek(date))
      weekAnimate(date, RIGHT)
    })

    week.hammer().on('dragright', function () {
      date.toPreviousWeekDays()
      week.before(createWeek(date))
      weekAnimate(date, LEFT)
    })

    week.hammer().on('dragdown',function () {
      displayMonth(dateRecord);
    })

    $('#previous_week').click(function () {
      date.toPreviousWeekDays()
      week.before(createWeek(date))
      weekAnimate(date, LEFT)
    })

    $('#next_week').click(function () {
      date.toNextWeekDays()
      week.after(createWeek(date))
      weekAnimate(date, RIGHT)
    })

    $('.date').click(function () {
      var weekArray = date.toWeekDays()
      date = weekArray[this.id]
      display(date)
    })
  }

  function display(date) {
    var calendar = $('.calendar')
    calendar.empty()
    displayMonthAndYear(date)
    displayDates(date)
    displayWeekday(date)
  }

  function displayWeekday(date) {
    var weekday = $("<div class='weekday'>" + date.compare(today) + "</div>")
    weekday.hide()
    $(".monthAndYear").after(weekday)
    weekday.fadeIn("slow")
    displayWeekdayColor(date.getDay());
  }

  function displayMonth(date) {
    display(date)
    var week = $('.week')
    var navigate = $('.navigate')
    week.hide();
    week.after(createMonth(date))
    var month = $('.month');
    month.height(0);
    month.show();
    month.animate({
      height: week.height()*5
    }, "fast", function () {
      $('.date').click(function () {
        var monthArray = date.toMonthDays()
        date = monthArray[this.id]
        month.animate({
          height: week.height()
        }, "fast" ,function(){
          display(date)
        })
      })
    })
  }

  function displayWeekdayColor(id) {
    $('#' + id).css('color', 'crimson')
  }

  function displayMonthAndYear(date) {
    var monthAndYear = $("<div class='monthAndYear'>" + date.toString("MMMM") + " " + date.toString("yyyy") + "</div>")
    $('.calendar').append(monthAndYear)

    $('.monthAndYear').click(function () {
      display(dateRecord = today.clone())
    })
  }

  display(dateRecord)
})
