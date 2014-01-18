'use strict'

angular.module('weDateApp').controller 'calendarCtrl', ($scope) ->
  $scope.WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat']

  $scope.init = ->
    $scope.selectedDate = moment(Date())
    $scope.update()

  $scope.update = ->
    delete $scope.selectedDate.$$hashKey
    $scope.weeks = moment().wholeMonthOf($scope.selectedDate)

  $scope.showWeek = ->
    $scope.weeks = [moment().weekOf($scope.selectedDate)]

  $scope.classOf = (date) ->
    {thisDate : date.isSame($scope.selectedDate, 'date')}

  $scope.init()

  @pickDate = (date) ->
    $scope.selectedDate = date
    $scope.update()

  undefined
