"use strict";
console.log("APIFactory");

app.factory('APIFactory', ["$q", "$http", "LowFare", "Inspiration", "Location", "FBCreds",
	function($q, $http, LowFare, Inspiration, Location, FBCreds){




	// const getSearchParams = () => {
	// 	return searchParams;
	// };


	// //
	// const setSearchParam = (obj) => {

	// };


	//
	const getFlights = (searchParams) => {
		let obj = searchParams;

		return $q( (resolve, reject) => {
			$http.get(`${LowFare.databaseUrl}apikey=${LowFare.apiKey}&origin=${obj.origin}&destination=${obj.destination}&departure_date=${obj.depDate}&return_date=${obj.retDate}&adults=${obj.adults}&max_price=${obj.airPrice}&currency=usd&number_of_results=50`)
			.then( (stuff) => {
				resolve(stuff.data.results);
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
		console.log("url", `${Inspiration.databaseUrl}apikey=${Inspiration.apiKey}&origin=${obj.origin}&departure_date=${obj.depDate}&duration=${obj.tripLength}&max_price=${obj.airPrice}`);
		return $q( (resolve, reject) => {
			$http.get(`${Inspiration.databaseUrl}apikey=${Inspiration.apiKey}&origin=${obj.origin}&departure_date=${obj.depDate}&duration=${obj.tripLength}&max_price=${obj.airPrice}`)
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

