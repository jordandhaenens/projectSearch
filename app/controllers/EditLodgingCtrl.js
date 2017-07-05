"use strict";


app.controller('EditLodgingCtrl', ['$timeout', '$location', 'DataFactory', 'API', '$scope', 'AuthFactory', function($timeout, $location, DataFactory, API, $scope, AuthFactory){
	console.log('EditLodgingCtrl loaded');

	$scope.params = DataFactory.searchParams;
	$scope.switch = true;
	$scope.data = {
		selected: null,
		lodging: []
	};
	// let user = AuthFactory.getUser();

	let searchError = function(){
		$scope.data.lodgingError = true;
		delete $scope.params.lodgingOpt;
		$timeout(function(){
			delete $scope.data.lodgingError;
			$location.path('/savedView');
		}, 4000);
	};


	$scope.getLodging = function(obj) {
		$scope.switch = false;
		API.getLodging($scope.params)
		.then( (response) => {
			console.log("getLodging response", response);
			console.log("response.length", response.length);
			//filter this by response.lodgingPrice not to exceed $scope.params.lodgingPriceCap
			if (response.length === 0) {
				searchError();
			} else {
				$scope.data.lodging = response;
			}
		})
		.catch(function(error){
			searchError();
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
