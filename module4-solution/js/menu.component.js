(function () {
angular.module('Data')
.component('menu', {
  templateUrl: 'js/templates/menuItems.template.html',
  bindings: {
    items: '<'
  }
});

})();
