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
			$scope.data.lodging = response;
		})
		.catch(function(error){
			$scope.data.lodgingError = true;
			delete $scope.params.lodgingOpt;
		});
	};


	$scope.updateParams = function(obj) { //obj is the selected flight or hotel from the partial
		Object.keys(obj).forEach(function(keyVal){
			$scope.params[keyVal] = obj[keyVal];
		});
	};


	$scope.selectedTripView = function() {
		$location.path('/selectedTripView');
	};


	getFlights();


}]);



