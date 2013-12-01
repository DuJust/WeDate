'use strict'

describe 'Controller: MainCtrl', ->
  beforeEach module('weDateApp')
  beforeEach inject ($controller, $rootScope) ->
      @scope = $rootScope.$new()
      @MainCtrl = $controller 'MainCtrl',{$scope : @scope}
      return

  it 'should attach a list of weDate to the scope', ->
    expect(@scope.weWeek.length).toBe 7
    expect(@scope.weMonth.length).toBe 31
    return
