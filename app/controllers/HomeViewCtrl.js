"use strict";
console.log("HomeViewCtrl");

app.controller('HomeViewCtrl', ['API', '$scope', 'DataFactory', '$window', function(API, $scope, DataFactory, $window){


	$scope.params = DataFactory.searchParams;
	console.log("searchParams in HomeViewCtrl", $scope.params);

	$scope.data = {
		selected: null,
		fullData: "", //this gives access to the currency
		flights: ""
	};

	$scope.updateParams = (something) => {
		$scope.params.destination = something;
		console.log("$scope.params", $scope.params);
		//testing to keep lodging = true
		if ($scope.params.lodging !== false) {
			$scope.params.lodgingSearch = true;
		}
	};

	$scope.getDestinations = function(){
		if ($scope.params.lodgingOpt === ""){
			$scope.params.lodging = true;
		}
		API.getDestinations($scope.params)
		.then( (response) => {
			$scope.data.fullData = response;
			$scope.data.flights = response.results;
			console.log("$scope.data", $scope.data.fullData);
			console.log("$scope.flights", $scope.data.flights);
		});
	};



	//Subtract retDate date obj from depDate date obj to get duration and add to $scope.params
	// $scope.params.duration = duration($scope.params.retDate, $scope.params.depDate);

	// let duration = (retDate, depDate) => {
	// 	2017-06-12
	// 	let depart = depDate.toString(),
	// 		ret = retDate.toString();

	// 	let dYear = depart.slice(0, 4),
	// 		dMonth = (depart.slice(5, 7) - 1),
	// 		dDate = depart.slice(8),
	// 		rYear = ret.slice(0, 4),
	// 		rMonth = (ret.slice(5, 7) - 1),
	// 		rDate = ret.slice(8);
	// 	console.log("dMonth", dMonth);

	// 	let d = new Date(dYear, dMonth, dDate)
	// };

	var currentTime = new Date();
	$scope.currentTime = currentTime;
	$scope.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	$scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	$scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	$scope.disable = [false, 1, 7];
	$scope.today = 'Today';
	$scope.clear = 'Clear';
	$scope.close = 'Close';
	var days = 15;
	// $scope.minDate = (new Date($scope.currentTime.getTime() - ( 1000 * 60 * 60 *24 * days ))).toISOString();
	// $scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
	$scope.onStart = function () {
	    console.log('onStart');
	};
	$scope.onRender = function () {
	    console.log('onRender');
	};
	$scope.onOpen = function () {
	    console.log('onOpen');
	};
	$scope.onClose = function () {
	    console.log('onClose');
	};
	$scope.onSet = function () {
	    console.log('onSet');
	};
	$scope.onStop = function () {
	    console.log('onStop');
	};







}]);