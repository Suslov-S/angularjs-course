(function () {
'use strict';

angular.module('App', [])
.controller('Controller', Controller);

Controller.$inject = ['$scope'];
function Controller($scope) {
	$scope.message = '';
 	$scope.lunchMenu = '';
	let msgClassListdefault = 'form-group message';
	$scope.msgClassList = msgClassListdefault;

	$scope.checkIfTooMuch = function () {

		let lunchMenuArr = $scope.lunchMenu.split(',').filter(e => e.trim().length > 0);
		
		if (lunchMenuArr.length === 0){
			$scope.message = 'Please enter data first'
			$scope.msgClassList = msgClassListdefault + ' text-danger'
			$scope.myStyle = "border: 1px solid red; padding:5px;"	
		}
		else if (lunchMenuArr.length < 4){
			$scope.message = 'Enjoy!'
			$scope.msgClassList = msgClassListdefault + ' text-success'
			$scope.myStyle = "border: 1px solid green; padding:5px;"	
		}
		else {
			$scope.message = 'Too much!'
			$scope.msgClassList = msgClassListdefault + ' text-success'
			$scope.myStyle = "border: 1px solid green; padding:5px;"
		}
		
		if($scope.lunchMenu.split(',').filter(e => e.trim().length === 0).length >0 && $scope.lunchMenu.length > 0){
			console.log(lunchMenuArr.length +'   '+ $scope.lunchMenu.split(',').length)
			$scope.emptyItemMsg = '*empty item are not consider';
		}else $scope.emptyItemMsg = '';
	}; 
	
}

})();