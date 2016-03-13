app.controller('LoginController', function($scope, $state, $rootScope, localStorageService, AuthenticationService){
	
	$rootScope.layout.isHomePage = false;
	$scope.user = user;
	$scope.login = function(){
		$scope.message = AuthenticationService.checkAccount(user);
		if($scope.message)
			return;
		$rootScope.user = user;
		AuthenticationService.setUser(user);
		$state.go('home');
	};
	
});

var user = {
	"firstName": "Truong Ha",
	"lastName": "",
	"avatar": "assets/img/avatar.png",
	"username": "truong.ha",
	"password": "123456"
};