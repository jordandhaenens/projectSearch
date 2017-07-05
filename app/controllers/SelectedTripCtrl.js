"use strict";
console.log("FlightsViewCtrl");


app.controller('SelectedTripCtrl', ['API', '$scope', 'DataFactory', '$window', '$location', 'AuthFactory', function(API, $scope, DataFactory, $window, $location, AuthFactory){



	$scope.params = DataFactory.searchParams;
	console.log("searchParams in SelectedTripCtrl", $scope.params);
	$scope.user = AuthFactory.getUser();//this will show/hide the save btn on partial


	$scope.editToFB = function(){
		$scope.params.lodging = true;
		API.editTrip($scope.params, $scope.params.tripID)
		.then( function(data) {
			console.log("return from editToFB", data);
			DataFactory.searchParams = {
			lodging: false,
			// hotelDays: "10", //update this reset once i am using momentjs to calculate. This will be set in HomeViewCtrl
			// totalDays: "10" //update this reset once i am using momentjs to calculate. This will be set in HomeViewCtrl
			};
			console.log("DataFactory params at scrap fire", DataFactory.searchParams);
			$location.path('/savedView');
		});
	};

	$scope.saveToFB = function(){
		//grab current uid and assign to $scope.params.uid
		$scope.params.uid = $scope.user;
		console.log("$scope.params before being passed to addTrip()", $scope.params);
		//this should save the entire params object to FB
		API.addTrip($scope.params)
		.then( function(data){
			console.log("return from saveToFB", data);
			//clear params and head home
			$scope.scrap();
		});
	};

	$scope.scrap = function(){
		DataFactory.searchParams = {
			lodging: false,
			//hotelDays: "10", //update this reset once i am using momentjs to calculate. This will be set in HomeViewCtrl
		};
		console.log("params at scrap fire", $scope.params);
		console.log("DataFactory params at scrap fire", DataFactory.searchParams);
		$location.path('/home');
	};









}]);



