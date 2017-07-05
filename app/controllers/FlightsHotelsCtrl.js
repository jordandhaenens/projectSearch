"use strict";
console.log("FlightsViewCtrl");

app.controller('FlightsHotelsCtrl', ['$timeout', 'API', '$scope', 'DataFactory', '$window', '$location', function($timeout, API, $scope, DataFactory, $window, $location){



	$scope.params = DataFactory.searchParams;
	$scope.hideHotels = true;
	$scope.hideFlights = false;

	$scope.data = {
		selected: null,
		flights: [],
		lodging: []
	};


	let getFlights = function(){
		API.getFlights($scope.params)
		.then( (response) => {
			$scope.data.flights = response;
			// console.log("flattenedflights in FlightsViewCtrl", $scope.data.flights);
		})
		.catch(function(error){
			$scope.data.flightError = true;
			$scope.hideFlights = true;
			$timeout(function(){
				$location.path('/home');
			}, 4500);
		});
	};

	$scope.getLodging = function() {
		$scope.hideFlights = true;
		$scope.params.lodgingSearch = false;
		API.getLodging($scope.params)
		.then( (response) => {
			$scope.hideHotels = false;
			// console.log("getLodging response", response);
			//filter this by response.lodgingPrice not to exceed $scope.params.lodgingPriceCap
			$scope.data.lodging = response;
		})
		.catch(function(error){
			$scope.data.lodgingError = true;
			delete $scope.params.lodgingOpt;
		});
	};


	$scope.updateParams = function(obj) { //obj is the selected flight or hotel from the partial
		// let troll = "$$hashKey";
		Object.keys(obj).forEach(function(keyVal){
		// console.log('keyVal added to searchParams', keyVal);
			// if (keyVal !== troll) {
				$scope.params[keyVal] = obj[keyVal];
			// }
		});
		// console.log("updated $scope.params", $scope.params);
	};


	$scope.selectedTripView = function() {
		$location.path('/selectedTripView');
	};


	getFlights();


}]);



