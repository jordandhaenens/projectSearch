"use strict";
console.log("FlightsViewCtrl");

app.controller('SelectedTripCtrl', ['API', '$scope', 'DataFactory', '$window', '$location', function(API, $scope, DataFactory, $window, $location){


	$scope.params = DataFactory.searchParams;
	$scope.user = null;

	$scope.saveToFB = function(){
		//grab current uid and assign to $scope.params.uid
		//this should save the entire params object to FB
	};

	$scope.scrap = function(){
		DataFactory.clearParams();
		console.log("params at scrap fire", $scope.params);
		console.log("DataFactory params at scrap fire", DataFactory.searchParams);
		$location.path('/home');
		//reset all $scope.params values and/or reload page to home
	};









}]);



