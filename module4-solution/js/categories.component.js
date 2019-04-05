(function () {

angular.module('Data')
.component('categories', {
  templateUrl: 'js/templates/categories.template.html',
  bindings: {
    items: '<'
  }

});

})();
