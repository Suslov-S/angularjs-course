(function () {
angular.module('Data')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['$stateParams','MenuDataService'];
function MenuItemsController($stateParams,MenuDataService) {
  let menu = this;
  MenuDataService.getItemsForCategory($stateParams.categoryShortName)
  .then(response => {
    menu.category = response.data.category
    menu.items = response.data.menu_items;
  })
 }

})();
