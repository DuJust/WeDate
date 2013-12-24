'use strict'

describe 'Controller: calendarCtrl', ->
  beforeEach module('weDateApp')
  beforeEach inject ($controller, $rootScope) ->
    @scope = $rootScope.$new()
    $controller 'calendarCtrl', {$scope: @scope}
  it 'should attach a list of weDate to the scope', ->
    expect(@scope.weWeek.length).toBe 7
    expect(@scope.weMonth.length).toBe @scope.weDate.daysInMonth()
  it 'should add a week', ->
    monday = @scope.weWeek[0]
    @scope.addWeek(1)
    expect(@scope.weWeek.length).toBe 7
    expect(@scope.weMonth.length).toBe 31
    expect(@scope.weWeek[0].format()).toBe monday.clone().add('w', 1).format()
    expect(@scope.weWeek[6].format()).toBe monday.clone().add('w', 1).add('d', 6).format()
  it 'should minus a week', ->
    monday = @scope.weWeek[0]
    @scope.addWeek(-1)
    expect(@scope.weWeek.length).toBe 7
    expect(@scope.weMonth.length).toBe 31
    expect(@scope.weWeek[0].format()).toBe monday.clone().add('w', -1).format()
    expect(@scope.weWeek[6].format()).toBe monday.clone().add('w', -1).add('d', 6).format()
