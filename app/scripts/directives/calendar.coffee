'use strict'

app = angular.module('weDateApp',[])

app.controller 'calendarCtrl', ($scope) ->
  $scope.WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat']
  $scope.init = ()->
    $scope.weDate = moment(Date())
    $scope.update()
  $scope.update = ()->
    delete $scope.weDate.$$hashKey
    $scope.weWeek = moment().weekOf($scope.weDate)
    $scope.weMonth = moment().monthOf($scope.weDate)
    $scope.weWholeMonth = moment().wholeMonthOf($scope.weDate)
  $scope.addWeek = (number)->
    $scope.weDate = $scope.weDate.add('w',number)
    $scope.update()
  $scope.pickDate = (date) ->
    $scope.weDate = date
    $scope.update()
  $scope.init()

app.directive 'calendar', () ->
  {
    restrict: 'E'
    transclude: true
    scope : {}
    controller: 'calendarCtrl'
    templateUrl: 'views/calendarView.html'
    replace: true
  }
