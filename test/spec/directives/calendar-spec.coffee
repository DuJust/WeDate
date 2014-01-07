'use strict'

describe 'Directive: calendar', ->

  beforeEach module('weDateApp')
  beforeEach module('views')

  beforeEach inject ($rootScope, $compile) ->
    @scope = $rootScope.$new()
    @elm = angular.element('<calendar></calendar>')
    $compile(@elm)(@scope)
    @scope.$digest()

  it 'should display 5 weeks', ->
    expect(@elm.find('.week').length).toBe 5

  it 'should display 35 dates', ->
    expect(@elm.find('.date').length).toBe 35

  it 'should display 1 thisDate', ->
    expect(@elm.find('.thisDate').length).toBe 1
