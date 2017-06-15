"use strict";

app.factory('APIFactory', ["$q", "$http", "Lowfare", "Inspiration", "Location", "FBCreds",
	function($q, $http, Lowfare, Inspiration, Location, FBCreds){




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
			$http.get(`${Lowfare.databaseUrl}apikey=${Lowfare.apiKey}&origin=${obj.origin}
				&destination=${obj.destination}&departure_date=${obj.depDate}&return_date=${obj.retDate}
				&adults=${obj.adults}&max_price=${obj.airPrice}
				&currency=usd&number_of_results=50`)
			.then( (data) => {
				resolve(data);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	//
	const getDestinations = (searchParams) => {
		let obj = searchParams;

		return $q( (resolve, reject) => {
			$http.get(`${Inspiration.databaseUrl}apikey=${Inspiration.apiKey}&origin=${obj.origin}
				&departure_date=${obj.depDate}&duration=${obj.tripLength}&max_price=${obj.airPrice}`)
			.then( (data) => {
				resolve(data);
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





}]);

