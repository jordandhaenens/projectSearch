"use strict";

app.factory('DataFactory', [function(){

	const searchParams = {
		uid: "",
		tripID: "",
		adults: "",
		origin: "",
		destination: "",
		tripLength: "",
		depDate: "",
		outboundDept: "",
		outboundArrival: "",
		retDate: "",
		indboundDept: "",
		inboundArrival: "",
		outboundTripTime: "",
		inboundTripTime: "",
		totalTime: "",
		airline: "",
		airPrice: "",
		lodging: "",
		lodgingPrice: "",
		checkIn: "",
		checkOut: ""
	};




	return {
		searchParams
	};

}]);