'use strict'

angular.module('weDateApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.init = ()->
      $scope.weDate = moment(Date())
      $scope.update()
      return
    $scope.update = ()->
      $scope.weWeek = ($scope.weDate.day(num) for num in [0..6])
      $scope.weMonth = ($scope.weDate.date(num) for num in [1..$scope.weDate.daysInMonth()])
      return
    $scope.addWeek = (number)->
      $scope.weDate = $scope.weDate.add('w',number)
      $scope.update()
      return
    $scope.init()
