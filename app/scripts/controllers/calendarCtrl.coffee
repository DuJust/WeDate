'use strict'

angular.module('weDateApp').controller 'calendarCtrl', ($scope) ->
  $scope.WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat']

  $scope.init = ->
    $scope.weDate = moment(Date())
    $scope.update()

  $scope.update = ->
    delete $scope.weDate.$$hashKey
    $scope.weeks = moment().wholeMonthOf($scope.weDate)

  $scope.pickDate = (date) ->
    $scope.weDate = date
    $scope.update()

  $scope.showWeek = ->
    $scope.weeks = [moment().weekOf($scope.weDate)]

  $scope.init()