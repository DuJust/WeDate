'use strict'

describe 'Directive: calendar', ->
  beforeEach module('weDateApp')
  beforeEach module('views')
  beforeEach inject ($controller, $rootScope, $compile, $templateCache) ->
    @scope = $rootScope.$new()
    @MainCtrl = $controller 'MainCtrl', {$scope: @scope}
    @elm = angular.element($templateCache.get('main.html'))
    $compile(@elm)(@scope)
    @scope.$digest()
  it 'should display', ->
    expect(@elm.find('.date').length).toBe 31
