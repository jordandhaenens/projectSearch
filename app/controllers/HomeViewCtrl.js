"use strict";
console.log("HomeViewCtrl");

app.controller('HomeViewCtrl', ['API', '$scope', 'DataFactory', '$window', function(API, $scope, DataFactory, $window){

	$scope.switch = true;
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
		let r = moment($scope.params.retDate, 'MMM-DD-YYYY').format('YYYY-MM-DD');
		let d = moment($scope.params.depDate, 'MMM-DD-YYYY').format('YYYY-MM-DD');
		$scope.params.retDate = r;
		$scope.params.depDate = d;
		duration($scope.params.retDate, $scope.params.depDate);
		console.log("lodgingOpt", $scope.params.lodgingOpt);
		if ($scope.params.lodgingOpt !== ""){ //should this be equals instead?
			$scope.params.lodging = true;
		}
		API.getDestinations($scope.params)
		.then( (response) => {
			$scope.data.fullData = response;
			$scope.data.flights = response.results;
			console.log("$scope.data", $scope.data.fullData);
			console.log("$scope.flights", $scope.data.flights);
			$scope.switch = false;
			console.log("switch", $scope.switch);
		});
	};



	//Subtract retDate date obj from depDate date obj to get duration and add to $scope.params
	// $scope.params.duration = duration($scope.params.retDate, $scope.params.depDate);

	let duration = function(retDate, depDate){
		let dep = moment(new Date(depDate), 'yyyy-mm-dd');
		let ret = moment(new Date(retDate), 'yyyy-mm-dd');
		let days = ret.diff(dep, 'days');
		console.log("dep", dep, "ret", ret);
		console.log("days", days);
		//add days to params
		$scope.params.totalDays = days;
		//$scope.params.hotelDays = days; //this is until I tie hotelDays to flight times
	};

	//This is for the date-picker
	// $scope.currentTime = new Date();
	// // $scope.departDate = $scope.params.depDate;
	// // $scope.returnDate = $scope.params.retDate;
	// $scope.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	// $scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	// $scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	// $scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	// $scope.disable = [false];
	// $scope.today = 'Today';
	// $scope.clear = 'Clear';
	// $scope.close = 'Close';
	// var days = 300;
	// $scope.minDate = (new Date($scope.currentTime.getTime())).toISOString();
	// $scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
	// $scope.onStart = function () {
	//     console.log('onStart');
	// };
	// $scope.onRender = function () {
	//     console.log('onRender');
	// };
	// $scope.onOpen = function () {
	//     console.log('onOpen');
	// };
	// $scope.onClose = function () {
	//     console.log('onClose');
	//     console.log('$scope.params.depDate', $scope.params.depDate);
	//     console.log('$scope.params.retDate', $scope.params.retDate);
	// };
	// $scope.onSet = function () {
	//     console.log('onSet');
	// };
	// $scope.onStop = function () {
	//     console.log('onStop');
	// };







}]);