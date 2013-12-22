'use strict'

angular.module('weDateApp')
  .directive 'calendar', () ->
    {
      restrict: 'E'
      transclude: true
      scope: {}
      controller: ($scope) ->
        $scope.init = ()->
          $scope.weDate = moment(Date())
          $scope.update()
        $scope.update = ()->
          $scope.weWeek = ($scope.weDate.clone().day(num) for num in [0..6])
          $scope.weMonth = ($scope.weDate.clone().date(num) for num in [1..$scope.weDate.clone().daysInMonth()])
        $scope.addWeek = (number)->
          $scope.weDate = $scope.weDate.add('w', number)
          $scope.update()
        $scope.init()
      template: '<div class="calendar">' +
                  '<div class="date" id="{{date.format(\'M-D\')}}" ng-repeat="date in weMonth">{{date.format(\'ddd\')}}</div>' +
                '</div>'
      replace: true
    }
