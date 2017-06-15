"use strict";
console.log("HomeViewCtrl");

app.controller('HomeViewCtrl', ['APIFactory', '$scope', 'DataFactory', '$window', function(APIFactory, $scope, DataFactory, $window){

	//
	let API = APIFactory;
	$scope.params = DataFactory.searchParams;

	/********************
	Testing Area
	********************/
	$scope.searchParams = function(){
		console.log('searchParams', DataFactory.searchParams);
	};
	// 2017-06-30
	/********************
	Testing Area End
	********************/
	console.log('searchParams', DataFactory.searchParams);

	$scope.getDestinations = function(){
		API.getDestinations($scope.searchParams)
		.then( (response) => {
			console.log("destination response", response);
		});
	};



	//
	$scope.getFlights = function(){
		API.getFlights($scope.searchParams)
		.then( (response) => {
			console.log("flights response", response);
		});
	};





}]);