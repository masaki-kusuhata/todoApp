'use strict';

/**
 * @ngdoc overview
 * @name todosApp
 * @description
 * # todosApp
 *
 * Main module of the application.
 */
angular
  .module('todosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  })
  .factory('CONSTANT', function () {
    return {
      // 優先度
      PRIORITY: {
        HIGH: 2,
        MEDIUM: 1,
        LOW: 0
      }
    };
  });
