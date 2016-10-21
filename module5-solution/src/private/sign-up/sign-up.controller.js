(function() {
"use strict";

angular.module('private')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'CurrentUserService'];
function SignUpController(MenuService, CurrentUserService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.isSaved = false;
  $ctrl.hasError = false;

  /**
   * Handles when user clicks the submit button.
   */
  $ctrl.submit = function() {
    MenuService.getMenuItem($ctrl.user.menu_number.toUpperCase())
    .then(function(item) {
      $ctrl.user.menu_item = item;
      CurrentUserService.saveInfo($ctrl.user);
      $ctrl.isSaved = true;
    })
    .catch(function() {
      $ctrl.hasError = true;
    });
  };

  $ctrl.resetError = function() {
    $ctrl.hasError = false;
  }
}

})();
