describe 'util moment', ->
  it 'should return week of a date', ->
    date = moment("12-25-2013", "MM-DD-YYYY")
    week = moment().weekOf(date)
    expect(week.length).toBe 7
    expect(week[0].format("MM-DD-YYYY")).toBe "12-22-2013"
    expect(week[6].format("MM-DD-YYYY")).toBe "12-28-2013"
  it 'should return week of a date', ->
    date = moment("12-25-2013", "MM-DD-YYYY")
    month = moment().monthOf(date)
    expect(month.length).toBe 31
    expect(month[0].format("MM-DD-YYYY")).toBe "12-01-2013"
    expect(month[30].format("MM-DD-YYYY")).toBe "12-31-2013"
