(function () {
'use strict';



angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
;

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var list = this;

  list.removeItem = function (itemIndex) {
    getMatchedMenuItems.removeItem(itemIndex);
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;

  narrow.searchTerm = "";


  narrow.getMatchedMenuItems = function (searchTerm) {

	var promise = MenuSearchService.getMenuItems();

	function myFilter(obj){
		var name = obj.name.toLowerCase();

		if(name.indexOf(searchTerm) > 0)
			return true
		else
			return false
	};

    promise.then(function (response) {
      narrow.items = response.data.menu_items.filter(myFilter)
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    })
  };

  narrow.removeItem = function (itemIndex) {
    narrow.items.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMenuItems = function () {
    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    });
    return response;
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
}

})();
