'use strict';

var app = app ||  {};

/**
 * @ngdoc function
 * @name todosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todosApp
 */
angular.module('todosApp')
  .controller('MainCtrl', function ($scope) {

    app.const.status.unfinished = 0;
    app.const.status.finished = 1;


    app.todo = function (text, priority, status, date) {
      this.text = text;
      this.priority = priority;
      this.status = status;
      this.date = date;
    };

    var list = [];
    var date = new Date();
    for(var i = 0; i < 10; i++){
      list.push(new app.todo(i, 1, 1, date));
    }

    console.log(list);

    $scope.todoList = list;

  });


