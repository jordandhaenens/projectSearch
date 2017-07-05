"use strict";


app.controller('SavedCtrl', ['$location', 'DataFactory', 'API', '$scope', 'AuthFactory', function($location, DataFactory, API, $scope, AuthFactory){
	console.log('SavedCtrl loaded');

	$scope.searchParams = DataFactory.searchParams;
	$scope.data = []; //this holds FB trip objects

	let user = AuthFactory.getUser();

	$scope.remLodging = function(params) {
		//remove lodging from SearchParams and updated obj in FB
		let obj = params;
		delete obj.beds;
		delete obj.checkIn;
		delete obj.checkOut;
		delete obj.city;
		delete obj.editLodging;
		delete obj.lodging;
		delete obj.lodgingOpt;
		delete obj.lodgingPrice;
		delete obj.lodgingPriceCap;
		delete obj.propertyName;
		delete obj.roomType;
		delete obj.state;
		delete obj.street;
		$scope.searchParams = obj;
		// console.log("obj passed to removeLodging()", $scope.searchParams);
		API.removeLodging($scope.searchParams, $scope.searchParams.tripID)
		.then( function(response) {
			getTrips();
		});
	};


	//
	$scope.deleteTrip = function(obj) {
		//delete from FB
		API.removeTrip(obj.tripID)
		.then( function(response) {
			getTrips();
		});
	};


	//
	$scope.editTrip = function(obj) {
		//pass params from saved trip to global searchParams
		DataFactory.searchParams = obj;
		//add an editLodging boolean to searchParams
		DataFactory.searchParams.editLodging = true;
		//navigate to editLodging
		$location.path('/editLodging');
	};


	let getTrips = function(){
		API.getTrips(user)
		.then( function(data){
			//filter by depature date. This also filters out pastTrips
			// data.forEach( function(currVal) {
			// 	if (currVal.depDate  !before today date object) {
			// 		add to $scope.data
			// 	}
			// });
			console.log("data from getTrips in SavedCtrl", data);
			$scope.data = data;
		});
	};

	getTrips();


}]);
