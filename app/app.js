"use strict";
console.log("App");

const app = angular.module('Weekender', ['ngRoute']);



app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: '',
		controller: ''
	})
	.when('/home', {
		templateUrl: 'partials/HomeView.html',
		controller: 'HomeViewCtrl'
	})
	.otherwise('/');
});