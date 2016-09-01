(function() {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {
    $scope.message = "Hello World!";
    $scope.task1 = "Walk the dinner";
    $scope.task2 = "Eat the kitchen";
    $scope.task3 = "Clean the roof";
    window.$scope = $scope;
  });
})();