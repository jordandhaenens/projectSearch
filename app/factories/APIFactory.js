"use strict";
console.log("API");

app.factory('API', ["$q", "$http", "LowFare", "Inspiration", "Location", "FBCreds",
	function($q, $http, LowFare, Inspiration, Location, FBCreds){



	//
	const getFlights = (searchParams) => {
		let obj = searchParams;

		return $q( (resolve, reject) => {
			$http.get(`${LowFare.databaseUrl}apikey=${LowFare.apiKey}&origin=${obj.origin}&destination=${obj.destination}&departure_date=${obj.depDate}&return_date=${obj.retDate}&adults=${obj.adults}&max_price=${obj.airPrice}&currency=usd&number_of_results=50&nonstop=true`)
			.then( (stuff) => {
				let results = stuff.data.results;
				// console.log("results in APIFactory", results);
				let arr = [];
				let obj = {};
				results.forEach(function(currObj){
					obj = {
						airPrice: currObj.fare.total_price,
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
					arr.push(obj);
				});
				// console.log("arr in APIFactory", arr);
				resolve(arr);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	//
	const getDestinations = (searchParams) => {
		let obj = searchParams;
		console.log("searchParams passed to APIFactory", searchParams);
		console.log("url", `${Inspiration.databaseUrl}apikey=${Inspiration.apiKey}&origin=${obj.origin}&departure_date=${obj.depDate}&duration=${obj.tripDays}&max_price=${obj.airPrice}`);
		return $q( (resolve, reject) => {
			$http.get(`${Inspiration.databaseUrl}apikey=${Inspiration.apiKey}&origin=${obj.origin}&departure_date=${obj.depDate}&duration=${obj.tripDays}&max_price=${obj.airPrice}`)
			.then( (stuff) => {
				resolve(stuff.data);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	const getLocation = (originIATA, destinationIATA) => {

	};


	const getTripTime = (originObj, destinationObj) => {

	};


	//
	const getLodging = (searchParams) => {

	};


	return {
		getFlights,
		getDestinations,
		getLocation,
		getTripTime,
		getLodging
	};


}]);

