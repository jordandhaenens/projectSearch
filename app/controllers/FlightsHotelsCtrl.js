"use strict";
console.log("FlightsViewCtrl");

app.controller('FlightsHotelsCtrl', ['API', '$scope', 'DataFactory', '$window', '$location', function(API, $scope, DataFactory, $window, $location){


	$scope.params = DataFactory.searchParams;
	$scope.hideHotels = true;
	$scope.hideFlights = '';

	$scope.data = {
		selected: null,
		flights: [],
		lodging: []
	};


	let getFlights = function(){
		console.log("$scope.params on FlightsViewCtrl", $scope.params);
		API.getFlights($scope.params)
		// API.getFlights(testParams)
		.then( (response) => {
			$scope.data.flights = response;
			console.log("flattenedflights in FlightsViewCtrl", $scope.data.flights);
		});
	};

	$scope.getLodging = function() {
		$scope.hideFlights = $scope.params.lodging;
		$scope.params.lodging = false;
		$scope.hideHotels = false;
		API.getLodging($scope.params)
		.then( (response) => {
			console.log("getLodging response", response);
			//filter this by response.lodgingPrice not to exceed $scope.params.lodgingPriceCap
			$scope.data.lodging = response;
		});
	};


	$scope.updateParams = function(obj) { //obj is the selected flight from the partial
		Object.keys(obj).forEach(function(keyVal){
		$scope.params[keyVal] = obj[keyVal];
		});
		console.log("updated $scope.params", $scope.params);
	};

	$scope.selectedTripView = function() {
		$location.path('/selectedTripView');

	};



	getFlights();


}]);



