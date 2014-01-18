'use strict'

angular.module('weDateApp').directive 'date', -> {
  restrict: 'E'
  require: '^calendar'
  scope: {
    date: '='
  }
  template: '<div class="date" ng-click="selected()">{{date.format("DD")}}</div>'
  link: (scope, element, attrs, calendar) ->
    scope.selected = ->
      calendar.pickDate(scope.date)
}
