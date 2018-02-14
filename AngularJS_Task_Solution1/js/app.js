angular.module('F1App', [
    'F1App.services',
    'F1App.controllers',
    'ngRoute'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when("/drivers", {templateUrl: "../templates/drivers.html", controller: "driversController"}).
      when("/drivers/:id", {templateUrl: "../templates/driver.html", controller: "driverController"}).
      otherwise({redirectTo: '/drivers'});
  }]).
  directive('driverInfo', function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            driver: '='
        },
        templateUrl: '../templates/driverInfo.html',
        link: function ($scope, element, attrs) { 
        } //DOM manipulation
    }
  })
  .directive('driverHistory', function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            races: '='
        },
        templateUrl: '../templates/driverHistory.html',
        link: function ($scope, element, attrs) { 
        } //DOM manipulation
    }
  });