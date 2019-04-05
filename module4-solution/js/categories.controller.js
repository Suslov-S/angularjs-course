(function () {

angular.module('Data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
  let categories = this;
  categories.items = items.data;
}

})();