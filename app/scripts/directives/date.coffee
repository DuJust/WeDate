'use strict'

angular.module('weDateApp').directive 'date', -> {
  restrict: 'E'
  require: '^calendar'
  scope: {
    date: '='
    selectedDate: '='
  }
  template: '<div class="date" ng-class = "{thisMonth: date.isSame(selectedDate, \'month\'), thisDate: date.isSame(selectedDate, \'day\')}" ng-click="selected()">{{date.format("DD")}}</div>'
  link: (scope, element, attrs, calendar) ->
    scope.selected = ->
      calendar.pickDate(scope.date)
}
