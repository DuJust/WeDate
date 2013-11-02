describe("We Date", function () {
  var date

  beforeEach(function () {
    date = new Date(2013, 9, 20)
  })
  it("when given a date should be return a list of dates", function () {
    var week = []
    for (var day = 0; day < 7; day++) {
      week.push(new Date(2013, 9, 20 + day));
    }

    expect(date.toWeekDays()).toEqual(week)
  })

  it("when given a date should be return a list of dates", function () {
    date = new Date(2013, 9, 10)
    var week = []
    for (var day = 0; day < 7; day++) {
      week.push(new Date(2013, 9, 6 + day));
    }

    expect(date.toWeekDays()).toEqual(week)
  })

  it("given a date when next week days should be return a list of dates", function () {
    var week = []
    for (var day = 0; day < 7; day++) {
      week.push(new Date(2013, 9, 27 + day));
    }

    expect(date.toNextWeekDays()).toEqual(week)
  })

  it("given a date when preview week days should be return a list of dates", function () {
    var week = []
    for (var day = 0; day < 7; day++) {
      week.push(new Date(2013, 9, 27 - 14 + day));
    }

    expect(date.toPreviewWeekDays()).toEqual(week)
  })

})