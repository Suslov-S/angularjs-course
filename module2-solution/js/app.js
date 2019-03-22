(function () {
'use strict';



angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var toBuy = this;

  toBuy.items = ShoppingListService.getToBuyItems();
  
  toBuy.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListService.getBoughtItems();
}


function ShoppingListService() {
  var service = this;
  
  var toBuyList =[
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 3 },
    { name: "coffee", quantity: 1 },
    { name: "donuts", quantity: 5 },
    { name: "ham", quantity: 500 }
  ];
  var alreadyBoughtList = []; 
 
  service.buyItem = function (itemIndex) {
    var item = toBuyList[itemIndex];
	alreadyBoughtList.push(item);
	toBuyList.splice(item, 1);
  };

  service.getToBuyItems = function () {
    return toBuyList;
  };

  service.getBoughtItems = function () {
	  	console.log(alreadyBoughtList);

    return alreadyBoughtList;
  };
}

})();