"use strict";



app.controller('NavbarCtrl', ['AuthFactory', '$scope', '$location', function(AuthFactory, $scope, $location) {
	console.log('NavbarCtrl loaded');

	$scope.loggedIn = false;


	//
	firebase.auth().onAuthStateChanged(function (user) {  //returning a promise to us and checking if there is a user
	    if (user) {
	      $scope.loggedIn = true;
	      console.log("currentUser logged in?", user, $scope.loggedIn);
	    } else {
	      $scope.loggedIn = false;
	      console.log("currentUser logged in?", $scope.loggedIn);
	      // $window.location.href = "#!/";
	    }
	});


	//
	$scope.logIn = function(){
		// AuthFactory.getUser();
		console.log("login running");
		AuthFactory.loginWithProvider()
		.then(function(data){
			AuthFactory.isAuthenticated();
			// AuthFactory.getUser();
			// var user = data.user.uid;
			console.log("data from googleLogIn", data);
			// $location.path('/home');
			// $scope.$apply();
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
			// $window.location.url= '#!/login'; //which one do I use?
			$location.path('/'); //which one do I use?
			$scope.$apply();
		}, function(error){
			console.log('There was an error logging user out');
		});

	};



}]);
