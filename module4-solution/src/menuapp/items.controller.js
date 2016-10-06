(function() {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['items'];
function ItemsListController(items) {
  var list = this;
  list.items = items.menu_items;
  list.category = (! items.category) ? 'Unknown' : items.category.name;
}

})();
