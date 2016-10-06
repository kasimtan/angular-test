(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig)
        .run(RunFunction);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      categories: ['MenuDataService',
        function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }
      ]
    }
  })

  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: "ItemsListController as itemsList",
    resolve: {
      items: ['$stateParams', 'MenuDataService',
        function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }
      ]
    }
  });

}
RunFunction.$inject = ['$rootScope']
    
    function RunFunction($rootScope) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log(error);
        });
    }
})();
