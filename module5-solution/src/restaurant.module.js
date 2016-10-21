(function() {
"use strict";

/**
 * Restaurant module that includes the public and private modules as dependencies
 */
angular.module('restaurant', ['public', 'private'])
.config(config);

config.$inject = ['$urlRouterProvider'];
function config($urlRouterProvider) {

  // If user goes to a path that doesn't exist, redirect to public root
  $urlRouterProvider.otherwise('/');
}

})();
