(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.directive('itemsLoaderIndicator', ItemsLoaderIndicatorDirective)
.constant('ApiEndpoint', "https://davids-restaurant.herokuapp.com/menu_items.json");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'listItem.template.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() { }

function ItemsLoaderIndicatorDirective() {
  var ddo = {
    templateUrl: 'loader.template.html'
  };
  return ddo;
}

function ItemsLoaderIndicatorDirectiveController() { }

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.searchTerm = "";

  var loadMenu = function (searchTerm) {
    list.isLoading = true;
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm || "");
    promise.then(function (foundItems) {
      list.found = foundItems;
      list.isLoading = false;
    });
  };

  list.narrowDown = function () {
    var searchTerm = list.searchTerm;
    if (searchTerm.trim() == "") list.found = [];
    else loadMenu(searchTerm);
  };

  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };

  loadMenu();
}

MenuSearchService.$inject = ['$http', 'ApiEndpoint']
function MenuSearchService($http, ApiEndpoint) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: ApiEndpoint
    }).then(function (response) {
      var foundItems = [];
      var menuItems = response.data.menu_items;
      if (menuItems) {
        foundItems = menuItems.filter(function(item) {
          return item.description.indexOf(searchTerm.toLowerCase()) != -1;
        });
      }
      return foundItems;
    });
  };
}

})();
