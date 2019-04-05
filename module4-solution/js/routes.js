(function () {
  
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/categories');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('categories', {
    url: '/categories',
    templateUrl: 'js/templates/main-categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', MenuDataService => MenuDataService.getAllCategories()]
    }
  })

  .state('menu', {
    url: '/{categoryShortName}',
    templateUrl: 'js/templates/main-menuItems.template.html',
    controller: 'MenuItemsController as menu'
  })

}

})();
