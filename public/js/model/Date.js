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

Date.prototype.compare = function (date) {
  var year = this.getYear() - date.getYear()
  if (year > 0)
    return "In " + year + " Years"
  else if (year < 0)
    return -year + " Years Ago"
  else {
    var month = this.getMonth() - date.getMonth()
    if (month > 0)
      return "In " + month + " Months"
    else if (month < 0)
      return -month + " Months Ago"
    else {
      var week = this.getWeekOfYear() - date.getWeekOfYear()
      if (week > 0)
        return "In " + week + " Weeks"
      else if (week < 0)
        return -week + " Weeks Ago"
      else {
        if (this.getDay() - date.getDay() == 0)
          return "Today"
        else
          return this.toString("dddd")
      }
    }
  }
}