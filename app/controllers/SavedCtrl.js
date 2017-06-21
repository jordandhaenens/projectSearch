"use strict";


app.controller('SavedCtrl', ['$location', 'DataFactory', 'API', '$scope', 'AuthFactory', function($location, DataFactory, API, $scope, AuthFactory){
	console.log('SavedCtrl loaded');

	$scope.searchParams = DataFactory.searchParams;
	$scope.data = []; //this holds FB trip objects filtered by depDate
	let user = AuthFactory.getUser();


	$scope.removeLodging = function(params) {
		//remove lodging from SearchParams and updated obj in FB
		let obj = params;
		delete obj.beds;
		delete obj.checkIn;
		delete obj.checkOut;
		delete obj.editLodging;
		delete obj.lodgingOpt;
		delete obj.lodgingPrice;
		delete obj.lodgingPriceCap;
		delete obj.propertyName;
		delete obj.roomType;
		delete obj.state;
		delete obj.street;

		API.editTrip(obj, obj.tripID)
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
		//navigate to home
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
