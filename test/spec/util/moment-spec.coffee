describe 'util moment', ->

  date = {}
  week = {}
  month = {}

  describe 'week of date', ->

    beforeEach ->
      date = moment("12-25-2013", "MM-DD-YYYY")
      week = moment().weekOf(date)

    it 'should return week of a date', ->
      expect(week.length).toBe 7
      expect(week[0].format("MM-DD-YYYY")).toBe "12-22-2013"
      expect(week[6].format("MM-DD-YYYY")).toBe "12-28-2013"

  describe 'month of date', ->

    beforeEach ->
      date = moment("12-25-2013", "MM-DD-YYYY")
      month = moment().monthOf(date)

    it 'should return month of a date', ->
      expect(month.length).toBe 31
      expect(month[0].format("MM-DD-YYYY")).toBe "12-01-2013"
      expect(month[30].format("MM-DD-YYYY")).toBe "12-31-2013"
