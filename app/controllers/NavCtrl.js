"use strict";



app.controller('NavbarCtrl', ['AuthFactory', '$scope', '$location', 'DataFactory', function(AuthFactory, $scope, $location, DataFactory) {
	console.log('NavbarCtrl loaded');

	$scope.loggedIn = false;
	console.log("$scope.loggedIn at page load", $scope.loggedIn);


	//
	firebase.auth().onAuthStateChanged(function (user) {  //returning a promise to us and checking if there is a user
	    if (user) {
	      $scope.loggedIn = true;
	      $scope.$apply();
	      console.log("currentUser logged in?", user, $scope.loggedIn);
	    } else {
	      $scope.loggedIn = false;
	      $scope.$apply();
	      console.log("currentUser logged in?", $scope.loggedIn);
	    }
	});


	//
	$scope.logIn = function(){
		console.log("login running");
		AuthFactory.loginWithProvider()
		.then(function(data){
			console.log("$scope.loggedIn", $scope.loggedIn);
			AuthFactory.isAuthenticated();
			$scope.$apply(); //this forces the partial to update $scope
		})
		.catch(function(error){
			console.log(error);
		});
	};


	//
	$scope.logOut = function(){
		AuthFactory.logoutUser()
		.then(function(data){
			$scope.loggedIn = false;
			$location.path('/');
			$scope.$apply();
		}, function(error){
			console.log('There was an error logging user out');
		});
	};


	//
	$scope.savedTrips = function(){
		$location.path('/savedView');
	};


	//
	$scope.goHome = function(){
		DataFactory.searchParams = {
			lodging: false
		};
		$location.path('/home');
	};


}]);
