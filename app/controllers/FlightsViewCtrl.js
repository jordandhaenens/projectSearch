"use strict";
console.log("FlightsViewCtrl");

app.controller('FlightsViewCtrl', ['APIFactory', '$scope', 'DataFactory', '$window', function(APIFactory, $scope, DataFactory, $window){

	//
	let API = APIFactory;
	$scope.params = DataFactory.searchParams;
	$scope.data = {
		selected: null,
		fullData: "", //this gives access to the currency
		flights: ""
	};


	$scope.getFlights = function(){
		console.log("$scope.params on FlightsViewCtrl", $scope.params);
		APIFactory.getFlights($scope.params)
		.then( (response) => {

			console.log("flights response", response);
		});
	};


	/********************
	Testing Area
	********************/
	$scope.getFlights();

	/********************
	Testing Area End
	********************/






}]);



