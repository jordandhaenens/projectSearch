"use strict";
console.log("FlightsViewCtrl");

app.controller('FlightsViewCtrl', ['API', '$scope', 'DataFactory', '$window', function(API, $scope, DataFactory, $window){


	$scope.params = DataFactory.searchParams;
	$scope.data = {
		selected: null, //don't know if this is going to be used on this controller
		flights: []
	};


	let getFlights = function(){
		console.log("$scope.params on FlightsViewCtrl", $scope.params);
		API.getFlights($scope.params)
		.then( (response) => {
			let obj = {};
			response.forEach(function(currObj){
				obj = {
					totalPrice: currObj.fare.total_price,
					changePenalties: currObj.fare.restrictions.change_penalties,
					refundable: currObj.fare.restrictions.refundable,
					outboundDepTime: currObj.itineraries[0].outbound.flights[0].departs_at,
					outboundArrTime: currObj.itineraries[0].outbound.flights[0].arrives_at,
					outboundFlightNum: currObj.itineraries[0].outbound.flights[0].flight_number,
					outboundMktAirline: currObj.itineraries[0].outbound.flights[0].marketing_airline,
					outboundAirline: currObj.itineraries[0].outbound.flights[0].operating_airline,
					outboundOrigin: currObj.itineraries[0].outbound.flights[0].origin.airport,
					outboundDestination: currObj.itineraries[0].outbound.flights[0].destination.airport,
					outboundTravelClass: currObj.itineraries[0].outbound.flights[0].booking_info.travel_class,
					inboundDepTime: currObj.itineraries[0].inbound.flights[0].departs_at,
					inboundArrTime: currObj.itineraries[0].inbound.flights[0].arrives_at,
					inboundFlightNum: currObj.itineraries[0].inbound.flights[0].flight_number,
					inboundMktAirline: currObj.itineraries[0].inbound.flights[0].marketing_airline,
					inboundAirline: currObj.itineraries[0].inbound.flights[0].operating_airline,
					inboundOrigin: currObj.itineraries[0].inbound.flights[0].origin.airport,
					inboundDestination: currObj.itineraries[0].inbound.flights[0].destination.airport,
					inboundTravelClass: currObj.itineraries[0].inbound.flights[0].booking_info.travel_class
				};
				$scope.data.flights.push(obj);
			});
		console.log("flattenedflights in FlightsViewCtrl", $scope.data.flights);
		});
	};


	/********************
	Testing Area
	********************/
	$scope.flights = [];
	let searchParams = {
		adults: "1",
		origin: "bna",
		destination: "nyc",
		tripLength: "10",
		depDate: "2017-06-30",
		retDate: "2017-07-10",
		airPrice: "500"
	};

	API.getFlights(searchParams)
	.then( (response) => {
		let obj = {};
		response.forEach(function(currObj){
			obj = {
				totalPrice: currObj.fare.total_price,
				changePenalties: currObj.fare.restrictions.change_penalties,
				refundable: currObj.fare.restrictions.refundable,
				outboundDepTime: currObj.itineraries[0].outbound.flights[0].departs_at,
				outboundArrTime: currObj.itineraries[0].outbound.flights[0].arrives_at,
				outboundFlightNum: currObj.itineraries[0].outbound.flights[0].flight_number,
				outboundMktAirline: currObj.itineraries[0].outbound.flights[0].marketing_airline,
				outboundAirline: currObj.itineraries[0].outbound.flights[0].operating_airline,
				outboundOrigin: currObj.itineraries[0].outbound.flights[0].origin.airport,
				outboundDestination: currObj.itineraries[0].outbound.flights[0].destination.airport,
				outboundTravelClass: currObj.itineraries[0].outbound.flights[0].booking_info.travel_class,
				inboundDepTime: currObj.itineraries[0].inbound.flights[0].departs_at,
				inboundArrTime: currObj.itineraries[0].inbound.flights[0].arrives_at,
				inboundFlightNum: currObj.itineraries[0].inbound.flights[0].flight_number,
				inboundMktAirline: currObj.itineraries[0].inbound.flights[0].marketing_airline,
				inboundAirline: currObj.itineraries[0].inbound.flights[0].operating_airline,
				inboundOrigin: currObj.itineraries[0].inbound.flights[0].origin.airport,
				inboundDestination: currObj.itineraries[0].inbound.flights[0].destination.airport,
				inboundTravelClass: currObj.itineraries[0].inbound.flights[0].booking_info.travel_class
			};
			$scope.data.flights.push(obj);
		});
		console.log("flattenedflights in FlightsViewCtrl", $scope.data.flights);
	});
	/********************
	Testing Area End
	********************/




	// $scope.getFlights();


}]);



