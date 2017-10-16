"use strict";
console.log('AuthFactory loaded');

app.factory('AuthFactory', [function(){

	let currentUser = null;

	//
	let getUser = () => {
		return currentUser;
	};


	//
	let provider = new firebase.auth.GoogleAuthProvider(); //I am only using Google to logIn for now

	let loginWithProvider = () => {
		return firebase.auth().signInWithPopup(provider);
	};


    //
    let isAuthenticated = function (){
        return new Promise ( (resolve, reject) => {
            firebase.auth().onAuthStateChanged( (user) => {
                if (user){
                    currentUser = user.uid;
                    resolve(true);
                }else {
                    resolve(false);
                }
            });
        });
    };


	//
	let logoutUser = function(){
        return firebase.auth().signOut();
    };


    return {
    	getUser,
    	loginWithProvider,
    	isAuthenticated,
    	logoutUser,
        currentUser
    };

}]);
