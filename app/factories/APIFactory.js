"use strict";
console.log("API");

app.factory('API', ["$q", "$http", "LowFare", "Inspiration", "Location", "Hotel", "FBCreds",
	function($q, $http, LowFare, Inspiration, Location, Hotel, FBCreds){


	//
	const getFlights = (searchParams) => {
		let params = searchParams;
		return $q( (resolve, reject) => {
			$http.get(`${LowFare.databaseUrl}apikey=${LowFare.apiKey}&origin=${params.origin}&destination=${params.destination}&departure_date=${params.depDate}&return_date=${params.retDate}&adults=${params.adults}&max_price=${params.airPrice}&currency=usd&number_of_results=50&nonstop=true`)
			.then( (stuff) => {
				let results = stuff.data.results;
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
				resolve(arr);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	//
	const getDestinations = (searchParams) => {
		let params = searchParams;
		return $q( (resolve, reject) => {
			$http.get(`${Inspiration.databaseUrl}apikey=${Inspiration.apiKey}&origin=${params.origin}&departure_date=${params.depDate}&duration=${params.totalDays}&max_price=${params.airPrice}`)
			.then( (stuff) => {
				resolve(stuff.data);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	//
	const getLodging = (searchParams) => {
		//this function will return lodging from the amadeus API
		let params = searchParams,
			outboundArrTime = moment(new Date(params.outboundArrTime), 'YYYY-MM-DD'),
			inboundDepTime = moment(new Date(params.inboundDepTime), 'YYYY-MM-DD');
		params.hotelDays = inboundDepTime.diff(outboundArrTime, 'days');
		outboundArrTime = moment(outboundArrTime).format('YYYY-MM-DD');
		inboundDepTime = moment(inboundDepTime).format('YYYY-MM-DD');
		let dailyRate = (params.lodgingPriceCap / params.hotelDays);

		return $q( (resolve, reject) => {
			$http.get(`${Hotel.databaseUrl}apikey=${Hotel.apiKey}&location=${params.destination}&check_in=${outboundArrTime}&check_out=${inboundDepTime}&radius=42&lang=en&max_rate=${dailyRate}&number_of_results=20`)
			.then( (stuff) => {
				let results = stuff.data.results;
				let arr = [];
				let obj = {};
				results.forEach(function(currObj){
					obj = {
						propertyName: currObj.property_name,
						street: currObj.address.line1,
						city: currObj.address.city,
						state: currObj.address.region,
						beds: currObj.rooms[0].room_type_info.number_of_beds + " " + currObj.rooms[0].room_type_info.bed_type,
						roomType: currObj.rooms[0].room_type_info.room_type,
						lodgingPrice: currObj.total_price.amount,
						checkIn: outboundArrTime,
						checkOut: inboundDepTime
					};
					arr.push(obj);
				});
				resolve(arr);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	// add to savedTrips in FB
	const addTrip = (obj) => {
		let object = angular.toJson(obj);
		return $q( (resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/trips.json`, object)
			.then( (something) => {
				resolve(something);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	// edit savedTrip by tripID
	const editTrip = (obj, tripID) => {
		let updatedObj = angular.toJson(obj);
		return $q( (resolve, reject) => {
			$http.patch(`${FBCreds.databaseURL}/trips/${tripID}.json`, updatedObj)
			.then( (something) => {
				resolve(something);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	//
	const removeLodging = (obj, tripID) => {
		let updatedObj = angular.toJson(obj);
		return $q( (resolve, reject) => {
			$http.put(`${FBCreds.databaseURL}/trips/${tripID}.json`, updatedObj)
			.then( (something) => {
				resolve(something);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	// remove from FB by ID
	const removeTrip = (tripID) => {
		return $q( (resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/trips/${tripID}.json`)
			.then( (something) => {
				resolve(something);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	// get all trips with user's uid
	const getTrips = (user) => {
		let trips = [];
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/trips.json?orderBy="uid"&equalTo="${user}"`)
			.then( (tripObj) => {
				let tripCollection = tripObj.data;
				Object.keys(tripCollection).forEach( (key) => {
					tripCollection[key].tripID = key;
					trips.push(tripCollection[key]);
				});
				resolve(trips);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};





	return {
		getFlights,
		getDestinations,
		getLocation,
		getTripTime,
		getLodging,
		addTrip,
		editTrip,
		removeTrip,
		getTrips,
		removeLodging
	};


}]);

