(function() {
"use strict";

angular.module('private')
.service('CurrentUserService', CurrentUserService);

/**
 * Used to store and track information about the currently registered user.
 * This is intended to be injected any time we need some user metadata
 * or to find out if the user is registered.
 **/
function CurrentUserService() {
  var service = this;
  var _user = {};

  /**
   * Load the current user with user info
   */
  service.saveInfo = function(user) {
    _user = user;
  };

  service.getUser = function() {
    return _user;
  };

  service.isRegistered = function() {
    return typeof(_user) === "object" && Object.keys(_user).length > 0;
  };
}

})();
