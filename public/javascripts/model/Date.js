Date.prototype.toWeekDays = function () {
  var weekday = this.clone()
  if (!weekday.is().sunday()) {
    weekday.sunday().add(-7).days()
  }
  var week = [weekday.clone()]
  for (var day = 0; day < 6; day++) {
    week.push(weekday.add(1).days().clone())
  }
  return week
}

Date.prototype.toNextWeekDays = function () {
  return this.add(7).days().toWeekDays()
}

Date.prototype.toPreviousWeekDays = function () {
  return this.add(-7).days().toWeekDays()
}