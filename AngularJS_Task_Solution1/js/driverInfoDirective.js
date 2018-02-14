'use strict';

/* Directives */

angular.module('F1App.directives', []).
    directive('driverInfo', function () {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                driverInfo: '='
            },
            template: '<div>{{driver}}</div>',
            // templateUrl: '../templates/driverInfo.html',
            link: function ($scope, element, attrs) { 
                console.log('directive has been called..!');
            } //DOM manipulation
        }
    });