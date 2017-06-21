"use strict";
console.log("HomeViewCtrl");

app.controller('HomeViewCtrl', ['API', '$scope', 'DataFactory', '$window', function(API, $scope, DataFactory, $window){


	$scope.params = DataFactory.searchParams;
	console.log("searchParams in HomeViewCtrl", $scope.params);

	$scope.data = {
		selected: null,
		fullData: "", //this gives access to the currency
		flights: ""
	};

	$scope.updateParams = (something) => {
		$scope.params.destination = something;
		console.log("$scope.params", $scope.params);
	};

	$scope.getDestinations = function(){
		if ($scope.params.lodgingOpt !== "null"){
			$scope.params.lodging = true;
		}
		API.getDestinations($scope.params)
		.then( (response) => {
			$scope.data.fullData = response;
			$scope.data.flights = response.results;
			console.log("$scope.data", $scope.data.fullData);
			console.log("$scope.flights", $scope.data.flights);
		});
	};



	//Subtract retDate date obj from depDate date obj to get duration and add to $scope.params
	// $scope.params.duration = duration($scope.params.retDate, $scope.params.depDate);

	// let duration = (retDate, depDate) => {
	// 	2017-06-12
	// 	let depart = depDate.toString(),
	// 		ret = retDate.toString();

	// 	let dYear = depart.slice(0, 4),
	// 		dMonth = (depart.slice(5, 7) - 1),
	// 		dDate = depart.slice(8),
	// 		rYear = ret.slice(0, 4),
	// 		rMonth = (ret.slice(5, 7) - 1),
	// 		rDate = ret.slice(8);
	// 	console.log("dMonth", dMonth);

	// 	let d = new Date(dYear, dMonth, dDate)
	// };







}]);