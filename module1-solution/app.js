(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.checkIfTooMuch = function () {
    var dishes = $scope.dishes.split(',');
    var validDishes = dishes.filter(function(value) {
      return value.trim().length > 0;
    });
    if (validDishes.length == 0) showMessage();
    else if (validDishes.length < 4) showMessage("Enjoy!", true);
    else showMessage("Too much!", true);
  };
  function showMessage(message, isValid) {
    $scope.borderStyle = isValid ? "has-success" : "has-error";
    $scope.textStyle = isValid ? "text-success" : "text-danger";
    $scope.message = message || "Please enter data first";
  }
}

})();
