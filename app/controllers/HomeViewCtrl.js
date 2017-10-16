"use strict";
console.log("HomeViewCtrl");

app.controller('HomeViewCtrl', ['$location', '$timeout', 'API', '$scope', 'DataFactory', '$window', function($location, $timeout, API, $scope, DataFactory, $window){

	$scope.switch = true;
	$scope.params = DataFactory.searchParams;
	$scope.data = {
		selected: null,
		fullData: "", //this gives access to the currency
		flights: ""
	};


	$scope.updateParams = (something) => {
		$scope.params.destination = something;
		console.log("$scope.params", $scope.params);
		if ($scope.params.lodging !== false) {
			$scope.params.lodgingSearch = true;
		}
	};


	$scope.getDestinations = function(){
		let r = moment($scope.params.retDate, 'MMM-DD-YYYY').format('YYYY-MM-DD');
		let d = moment($scope.params.depDate, 'MMM-DD-YYYY').format('YYYY-MM-DD');
		$scope.params.retDate = r;
		$scope.params.depDate = d;
		duration($scope.params.retDate, $scope.params.depDate);
		if ($scope.params.lodgingOpt !== ""){
			$scope.params.lodging = true;
		}
		$scope.switch = false;
		API.getDestinations($scope.params)
		.then( (response) => {
			$scope.data.fullData = response;
			$scope.data.flights = response.results;
		})
		.catch(function(){
			$scope.data.flightError = true;
			$timeout(function(){
				$location.path('/home');
				$scope.switch = true;
				delete $scope.data.flightError;
			}, 4000);
		});
	};


	let duration = function(retDate, depDate){
		let dep = moment(new Date(depDate), 'yyyy-mm-dd');
		let ret = moment(new Date(retDate), 'yyyy-mm-dd');
		let days = ret.diff(dep, 'days');
		console.log("dep", dep, "ret", ret);
		console.log("days", days);
		//add days to params
		$scope.params.totalDays = days;
	};




}]);