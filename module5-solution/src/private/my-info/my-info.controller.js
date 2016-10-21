(function() {
"use strict";

angular.module('private')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['CurrentUserService', 'ApiPath'];
function MyInfoController(CurrentUserService, ApiPath) {
  var $ctrl = this;
  $ctrl.user = CurrentUserService.getUser();
  $ctrl.isRegistered = CurrentUserService.isRegistered();
  $ctrl.basePath = ApiPath;
}

})();
