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
  .controller('MainCtrl', function ($scope, CONSTANT) {

    app.todo = function (text, priority, status, date) {
      this.text = text;
      this.priority = priority;
      this.status = status;
      this.date = date;
    };

    $scope.prioritys = CONSTANT.PRIORITY;



    $scope.addTodo = function () {

      if (this.todoText === ''){
        return;
      }

      var todo = new app.todo ( this.todoText,
                                this.todoPriority,
                                false,
                                new Date());
      console.log(todo);
      $scope.todoList = [todo];
    };

    $scope.setTodoStatus = function (status) {

      switch (status) {
        case CONSTANT.PRIORITY.HIGH:
          return 'label-danger';
        case CONSTANT.PRIORITY.MEDIUM:
          return 'label-warning';
        case CONSTANT.PRIORITY.LOW:
          return 'label-primary';
        default:
          return '';

      }

    };

    var list = [];
    var date = new Date();
    for(var i = 0; i < 10; i++){
      list.push(new app.todo(i, 1, false, date));
    }

    console.log(list);

    $scope.todoList = list;

  });
