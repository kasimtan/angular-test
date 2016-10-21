(function() {
"use strict";

angular.module('private')
.config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
  // Routes
  $stateProvider
    .state('my', {
      url: '/my',
      abstract: true,
      templateUrl: 'src/private/private.html'
    })
    .state('my.info', {
      url: '/info',
      templateUrl: 'src/private/my-info/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfoCtrl'
    })
    .state('my.signup', {
      url: '/signup',
      templateUrl: 'src/private/sign-up/sign-up.html',
      controller: 'SignUpController',
      controllerAs: 'signUpCtrl'
    });
}

})();
