"use strict";
console.log("FlightsViewCtrl");

app.controller('SelectedTripCtrl', ['API', '$scope', 'DataFactory', '$window', '$location', 'AuthFactory', function(API, $scope, DataFactory, $window, $location, AuthFactory){


	$scope.params = DataFactory.searchParams;
	$scope.user = AuthFactory.getUser();//this will show/hide the save btn on partial


	$scope.saveToFB = function(){
		//grab current uid and assign to $scope.params.uid
		$scope.params.uid = $scope.user;
		console.log("$scope.params", $scope.params);
		//this should save the entire params object to FB
		API.addTrip($scope.params)
		.then( function(data){
			console.log("return from saveToFB", data);
			//clear data
			$scope.scrap();
		});
	};

	$scope.scrap = function(){
		DataFactory.searchParams = {
			lodging: false,
			tripDays: "10", //update this reset once i am using momentjs to calculate
			totalDays: "10" //update this reset once i am using momentjs to calculate
		};
		console.log("params at scrap fire", $scope.params);
		console.log("DataFactory params at scrap fire", DataFactory.searchParams);
		$location.path('/home');
	};









}]);



