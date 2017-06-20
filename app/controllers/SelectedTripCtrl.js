"use strict";
console.log("FlightsViewCtrl");

app.controller('SelectedTripCtrl', ['API', '$scope', 'AuthFactory', 'DataFactory', '$window', '$location', function(API, $scope, AuthFactory, DataFactory, $window, $location){


	$scope.params = DataFactory.searchParams;
	$scope.user = null;



	$scope.saveToFB = function(){
		//grab current uid and assign to $scope.params.uid
		//this should save the entire params object to FB
		AuthFactory.getUser
	};

	$scope.scrap = function(){
		DataFactory.searchParams = {
			lodging: false,
			tripDays: "10", //update this reset once i am using momentjs to calculate
			totalDays: "10" //update this reset once i am using momentjs to calculate
		};
		// DataFactory.clearParams();
		console.log("params at scrap fire", $scope.params);
		console.log("DataFactory params at scrap fire", DataFactory.searchParams);
		$location.path('/home');
	};









}]);



