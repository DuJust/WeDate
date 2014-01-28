'use strict'

angular.module('weDateApp').controller 'calendarCtrl', ($scope) ->
  $scope.viewtype = 'weekview'
  $scope.WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat']

  $scope.init = ->
    $scope.selectedDate = moment(Date())
    $scope.update()

  $scope.update = ->
    delete $scope.selectedDate.$$hashKey
    $scope.weeks = moment().wholeMonthOf($scope.selectedDate)

  $scope.changeview = ->
    $scope.viewtype = if $scope.viewtype == 'weekview' then 'monthview' else 'weekview'

  $scope.classOf = (date) ->
    {thisDate : date.isSame($scope.selectedDate, 'date')}

  $scope.init()

  @pickDate = (date) ->
    $scope.selectedDate = date
    $scope.update()

  undefined
