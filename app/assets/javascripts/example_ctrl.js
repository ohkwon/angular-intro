(function() {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {
    $scope.message = "Hello World!";
    $scope.task1 = "Walk the dinner";
    $scope.task2 = "Eat the kitchen";
    $scope.task3 = "Clean the roof";

    $scope.reviews = ["Much amaze", "such wow", "too yes", "many funs"]

    $scope.addReview = function(newReview) {
      $scope.reviews.push(newReview);
    }

    $scope.tasks = ["Walk the dinner", "eat the kitche", "clean the roof"]

    $scope.addTask = function(newTask) {
      if (newTask != null) {
        $scope.tasks.push(newTask);
        $scope.newTask = null
      }
    }

    $scope.finish = function(finishedTask) {
      console.log(finishedTask);
      var index = $scope.tasks.indexOf(finishedTask);
      $scope.tasks.splice(index, 1);
    }


    window.$scope = $scope;
  });
})();{}