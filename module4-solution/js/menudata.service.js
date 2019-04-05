(function () {

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q','$http', 'ApiBasePath']
function MenuDataService($q,$http,ApiBasePath) {
  let service = this;

  service.getAllCategories = () => {
    const response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };

  service.getItemsForCategory = (categoryShortName) => {
    const response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return response;
  };

}

})();
