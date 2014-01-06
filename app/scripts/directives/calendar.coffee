'use strict'

angular.module('weDateApp').directive 'calendar', ->
  {
    restrict: 'E'
    transclude: true
    scope : {}
    controller: 'calendarCtrl'
    templateUrl: 'views/calendarView.html'
    replace: true
  }
