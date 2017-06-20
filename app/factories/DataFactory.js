"use strict";
console.log("DataFactory");

app.factory('DataFactory', [function(){

	// let searchParams = {
	// 	uid: "",
	// 	tripID: "",
	// 	adults: "",
	// 	origin: "",
	// 	destination: "",
	// 	tripDays: "10",
	// 	travelDays: "",
	// 	totalDays: "10",
	// 	depDate: "",
	// 	retDate: "",
	// 	outboundTimeLength: "",
	// 	inboundTimeLength: "",
	// 	totalTime: "",
	// 	airPrice: "",
	// 	changePenalties: "",
	// 	refundable: "",
	// 	outboundDepTime: "",
	// 	outboundArrTime: "",
	// 	outboundFlightNum: "",
	// 	outboundMktAirline: "",
	// 	outboundAirline: "",
	// 	outboundOrigin: "",
	// 	outboundDestination: "",
	// 	outboundTravelClass: "",
	// 	inboundDepTime: "",
	// 	inboundArrTime: "",
	// 	inboundFlightNum: "",
	// 	inboundMktAirline: "",
	// 	inboundAirline: "",
	// 	inboundOrigin: "",
	// 	inboundDestination: "",
	// 	inboundTravelClass: "",

	// 	lodgingOpt: "",
	// 	lodging: false,
	// 	lodgingPrice: "",
	// 	lodgingPriceCap: "",
	// 	checkIn: "",
	// 	checkOut: "",
	//  pastTrip: true
	// };

	let searchParams = {

		lodging: false,
		tripDays: "10",
		totalDays: "10"
	};

	// let clearParams = function(){ //this function is not resetting searchParams. Why?!?
	// 	// searchParams = "";
	// 	searchParams = {
	// 		lodging: false,
	// 		tripDays: "10",
	// 		totalDays: "10"
	// 	};
	// 	console.log("searchParams in DataFactory", searchParams);
	// };


	return {
		searchParams
	};

}]);