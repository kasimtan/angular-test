(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();
  
  list.isEmpty = function() {
    return (list.items.length == 0);
  }

  list.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var cart = this;

  cart.items = ShoppingListCheckOffService.getBoughtItems();
  
  cart.isEmpty = function() {
    return (cart.items.length == 0);
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 15 },
    { name: "nuts", quantity: 10 },
    { name: "soda", quantity: 20 },
    { name: "beer", quantity: 10 },
    { name: "wine", quantity: 2 }
  ];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
