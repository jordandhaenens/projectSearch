"use strict";


app.controller('EditLodgingCtrl', ['$location', 'DataFactory', 'API', '$scope', 'AuthFactory', function($location, DataFactory, API, $scope, AuthFactory){
	console.log('EditLodgingCtrl loaded');

	$scope.params = DataFactory.searchParams;
	$scope.data = {
		selected: null,
		lodging: []
	};
	// let user = AuthFactory.getUser();


	$scope.getLodging = function(obj) {
		API.getLodging($scope.params)
		.then( (response) => {
			console.log("getLodging response", response);
			//filter this by response.lodgingPrice not to exceed $scope.params.lodgingPriceCap
			$scope.data.lodging = response;
		});
	};


	//
	$scope.updateParams = function(obj) { //obj is the selected flight or hotel from the partial
		// let troll = "$$hashKey";
		Object.keys(obj).forEach(function(keyVal){
			// if (keyVal !== troll) {
				$scope.params[keyVal] = obj[keyVal];
				console.log('keyVal added to searchParams', obj[keyVal]);
			// }
		});
		console.log("updated $scope.params", $scope.params);
	};


	//
	$scope.selectedTripView = function() {
		$location.path('/selectedTripView');
	};




}]);
