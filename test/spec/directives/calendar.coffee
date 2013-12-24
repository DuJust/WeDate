'use strict'

describe 'Directive: calendar', ->
  beforeEach module('weDateApp')
  beforeEach module('views')
  beforeEach inject ($rootScope, $compile) ->
    @scope = $rootScope.$new()
    @elm = angular.element('<calendar></calendar>')
    $compile(@elm)(@scope)
    @scope.$digest()
  it 'should display', ->
    expect(@elm.find('.date').length).toBe 31
