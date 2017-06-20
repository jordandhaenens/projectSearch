"use strict";


app.controller('SavedCtrl', ['API', '$scope', 'AuthFactory', function(API, $scope, AuthFactory){
	console.log('SavedCtrl loaded');


	$scope.data = [];
	let user = AuthFactory.getUser();

	let getTrips = function(){
		API.getTrips(user).
		then( function(data){
			//filter by depature date. This also filters out pastTrips
			console.log("data from getTrips in SavedCtrl", data);
		});
	};


}]);
