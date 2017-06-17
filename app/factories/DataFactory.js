"use strict";
console.log("DataFactory");

app.factory('DataFactory', [function(){

	const searchParams = {
		uid: "",
		tripID: "",
		adults: "",
		origin: "",
		destination: "",
		tripDays: "10",
		depDate: "",
		// outboundDept: "",
		// outboundArrival: "",
		retDate: "",
		// indboundDept: "",
		// inboundArrival: "",
		outboundTimeLength: "",
		inboundTimeLength: "",
		totalTime: "",
		// airline: "",
		airPrice: "",
		changePenalties: "",
		refundable: "",
		outboundDepTime: "",
		outboundArrTime: "",
		outboundFlightNum: "",
		outboundMktAirline: "",
		outboundAirline: "",
		outboundOrigin: "",
		outboundDestination: "",
		outboundTravelClass: "",
		inboundDepTime: "",
		inboundArrTime: "",
		inboundFlightNum: "",
		inboundMktAirline: "",
		inboundAirline: "",
		inboundOrigin: "",
		inboundDestination: "",
		inboundTravelClass: "",

		lodging: "",
		lodgingPrice: "",
		checkIn: "",
		checkOut: ""
	};

	// obj = {
	// 	totalPrice: "",
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
	// 	inboundTravelClass: ""
	// };



	return {
		searchParams
	};

}]);