'use strict';

/**
 * @ngdoc function
 * @name angularYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularYeomanApp
 */
angular.module('angularYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
