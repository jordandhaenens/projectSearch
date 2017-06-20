"use strict";
console.log('AuthFactory loaded');

app.factory('AuthFactory', [function(){

	let currentUser = null;

	//
	let getUser = () => {
		console.log('currentUser', currentUser);
		return currentUser;
	};


	//
	let provider = new firebase.auth.GoogleAuthProvider(); //I am only using Google to logIn for now

	let loginWithProvider = () => {
		return firebase.auth().signInWithPopup(provider);
	};


    //
    let isAuthenticated = function (){
        console.log("isAuthenticated fired AuthFactory");
        return new Promise ( (resolve, reject) => {
            firebase.auth().onAuthStateChanged( (user) => {
                if (user){
                    currentUser = user.uid;
                    console.log("user", user.uid);
                    resolve(true);
                }else {
                    resolve(false);
                }
            });
        });
    };


	//
	let logoutUser = function(){
        console.log(currentUser, "logged out");
        return firebase.auth().signOut();
    };


    return {
    	getUser,
    	loginWithProvider,
    	isAuthenticated,
    	logoutUser
    };

}]);
