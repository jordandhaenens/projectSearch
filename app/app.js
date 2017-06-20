"use strict";
console.log("App");

const app = angular.module('Weekender', ['ngRoute']);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then( (userExists) => {
		if (userExists){
			console.log("Authenticated, go ahead");
			resolve();
		}else {
			console.log("Not Authenticated");
			reject();
		}
	});
});


app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/HomeView.html',
		controller: 'HomeViewCtrl'
	})
	.when('/home', {
		templateUrl: 'partials/HomeView.html',
		controller: 'HomeViewCtrl'
	})
	.when('/flightsView', {
		templateUrl: 'partials/FlightsView.html',
		controller: 'FlightsHotelsCtrl'
	})
	.when('/selectedTripView', {
		templateUrl: 'partials/SelectedTrip.html',
		controller: 'SelectedTripCtrl'
	})
	.otherwise('/home');
});


app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});