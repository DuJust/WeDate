'use strict'

angular.module('weDateApp').directive 'calendar', ->
  {
    restrict: 'E'
    scope : {}
    controller: 'calendarCtrl'
    templateUrl: 'views/calendarView.html'
    replace: true
  }
