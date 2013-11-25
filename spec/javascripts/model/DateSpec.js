describe("We Date", function () {
  var date

  beforeEach(function () {
    date = new Date(2013, 9, 20)
  })
  it("when given a date should be return a list of dates", function () {
    var week = []
    for (var day = 0; day < 7; day++) {
      week.push(new Date(2013, 9, 20 + day))
    }

    expect(date.toWeekDays()).toEqual(week)
  })

  it("when given a date should be return a list of dates", function () {
    date = new Date(2013, 9, 10)
    var week = []
    for (var day = 0; day < 7; day++) {
      week.push(new Date(2013, 9, 6 + day))
    }

    expect(date.toWeekDays()).toEqual(week)
  })

  it("when given a week should be return a list of weeks", function () {
    date = new Date(2013, 10, 25).moveToFirstDayOfMonth().add(-7).sunday()
    var month = [date.toWeekDays()]
    for (var week = 0; week < 4 ; week++) {
      month.push(date.add(1).week().clone().toWeekDays())
    }

    expect(new Date(2013, 10, 25).toMonthWeeks()).toEqual(month)
  })

  it("given a date when next week days should be return a list of dates", function () {
    var week = []
    for (var day = 0; day < 7; day++) {
      week.push(new Date(2013, 9, 27 + day))
    }

    expect(date.toNextWeekDays()).toEqual(week)
  })

  it("given a date when preview week days should be return a list of dates", function () {
    var week = []
    for (var day = 0; day < 7; day++) {
      week.push(new Date(2013, 9, 27 - 14 + day))
    }

    expect(date.toPreviousWeekDays()).toEqual(week)
  })

  describe("date compare", function () {

    it("given a next year date should return in 1 year", function () {
      var nextYear = new Date(2014, 1, 1)
      expect(nextYear.compare(date)).toEqual("In 1 Years")
    })

    it("given a before year date should return 1 year ago", function () {
      var beforeYear = new Date(2012, 1, 1)
      expect(beforeYear.compare(date)).toEqual("1 Years Ago")
    })

    it("given a next month date should return in 1 month", function () {
      var nextMonth = new Date(2013, 10, 1)
      expect(nextMonth.compare(date)).toEqual("In 1 Months")
    })

    it("given a before month date should return 1 month ago", function () {
      var beforeMonth = new Date(2013, 8, 1)
      expect(beforeMonth.compare(date)).toEqual("1 Months Ago")
    })

    it("given a next week date should return in 1 week", function () {
      var nextWeek = new Date(2013, 9, 27)
      expect(nextWeek.compare(date)).toEqual("In 1 Weeks")
    })

    it("given a before week date should return 1 week ago", function () {
      var beforeWeek = new Date(2013, 9, 13)
      expect(beforeWeek.compare(date)).toEqual("1 Weeks Ago")
    })

    it("given the same date should return today", function () {
      var today = new Date(2013, 9, 20)
      expect(today.compare(date)).toEqual("Today")
    })

    it("given the next date should return date", function () {
      var nextDate = new Date(2013, 9, 21)
      expect(nextDate.compare(date)).toEqual("Monday")
    })

  })


})