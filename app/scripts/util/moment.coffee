moment.fn.weekOf = (date)->
  (date.clone().day(num) for num in [0..6])

moment.fn.monthOf = (date)->
  (date.clone().date(num) for num in [1..date.daysInMonth()])

moment.fn.wholeMonthOf = (date)->
  firstSunday = date.clone().date(1).day(0)
  lastSaturday = date.clone().date(date.daysInMonth()).day(6)
  count = lastSaturday.diff(firstSunday,'weeks')
  (moment().weekOf(firstSunday.clone().add('w',num)) for num in [0..count])
