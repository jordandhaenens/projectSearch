"use strict";
console.log("DataFactory");

app.factory('DataFactory', [function(){

	// let searchParams = {
	// 	uid: "",
	// 	tripID: "",
	// 	adults: "",
	// 	origin: "",
	// 	destination: "",
	// 	hotelDays: "10",
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
	};



	return {
		searchParams
	};

}]);