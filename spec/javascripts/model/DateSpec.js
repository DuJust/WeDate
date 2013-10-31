describe("We Date", function () {
  var date

  beforeEach(function () {
    date = new Date(2013, 9, 20)
  })

  it("when given a date should be return a list of dates", function () {
    var week = []
    for (var day = 0; day < 7; day++ ) {
      week.push(new Date(2013, 9, 20 + day));
    }

    expect(date.toWeekDays()).toEqual(week)
  })

  it("given a date when next week days should be return a list of dates", function () {
    var week = []
    for (var day = 0; day < 7; day++ ) {
      week.push(new Date(2013, 9, 27 + day));
    }

    expect(date.toNextWeekDays()).toEqual(week)
  })
})