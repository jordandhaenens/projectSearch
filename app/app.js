"use strict";

const app = angular.module('Weekender', ['ngRoute']);



app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: '',
		controller: ''
	})
	.when('/home', {
		templateUrl: '',
		controller: 'HomeViewCtrl'
	})
	.otherwise('/');
});