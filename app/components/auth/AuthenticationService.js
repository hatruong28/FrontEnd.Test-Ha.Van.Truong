app.service('AuthenticationService', function(localStorageService, $http){

    var user = localStorageService.get('_currentUser');

	return {
	    setUser : function(aUser){
	    	localStorageService.set('_currentUser', aUser);
	        user = aUser;
	    },
	    isLoggedIn : function(){
	        return(user)? true : false;
	    },
	    checkAccount: function(aUser){
	    	var message = '';
	    	if(aUser.username.length < 6){
				message = 'Username must greater than 6 characters.';
			} else if (aUser.password.length < 6){
				message = 'Password must greater than 6 characters.';
			} else if(aUser.username != 'truong.ha' || aUser.password != '123456'){
				message = 'Invalid username or password';
			}
			return message;
	    }
	}
	
});