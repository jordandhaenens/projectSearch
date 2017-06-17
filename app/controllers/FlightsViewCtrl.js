"use strict";
console.log("FlightsViewCtrl");

app.controller('FlightsViewCtrl', ['API', '$scope', 'DataFactory', '$window', function(API, $scope, DataFactory, $window){


	$scope.params = DataFactory.searchParams;

	$scope.data = {
		selected: null, //don't know if this is going to be used on this controller
		flights: []
	};

	/********************
	Testing Area
	********************/
	// $scope.flights = [];
	// let testParams = {
	// 	adults: "1",
	// 	origin: "bna",
	// 	destination: "nyc",
	// 	tripLength: "10",
	// 	depDate: "2017-06-30",
	// 	retDate: "2017-07-10",
	// 	airPrice: "500"
	// };
	/********************
	Testing Area End
	********************/

	let getFlights = function(){
		console.log("$scope.params on FlightsViewCtrl", $scope.params);
		API.getFlights($scope.params)
		// API.getFlights(testParams)
		.then( (response) => {
			$scope.data.flights = response;
			console.log("flattenedflights in FlightsViewCtrl", $scope.data.flights);
		});
	};


	$scope.updateParams = function(obj) { //obj is the selected flight from the partial
		Object.keys(obj).forEach(function(keyVal){
		$scope.params[keyVal] = obj[keyVal];
		});
		console.log("updated $scope.params", $scope.params);
	};





	getFlights();


}]);



