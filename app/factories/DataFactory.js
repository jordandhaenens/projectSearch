"use strict";
console.log("DataFactory");

app.factory('DataFactory', [function(){

	let searchParams = {
		lodging: false,
	};



	return {
		searchParams
	};

}]);