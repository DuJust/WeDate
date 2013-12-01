'use strict'

angular.module('weDateApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.init = ()->
      $scope.weDate = moment(Date()).
      $scope.weWeek = (moment(Date()).day(num) for num in [0..6])
      $scope.weMonth = (moment(Date()).date(num) for num in [1..moment().daysInMonth()])
      return
    $scope.init()
