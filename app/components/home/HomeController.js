app.controller('HomeController', function($scope, $state, localStorageService, AuthenticationService, ProductService){

	$scope.layout.isHomePage = true;
	var getData = function(){
		ProductService.getProducts().success(function(data){
			$scope.products = data;
		}).error(function(err){ console.log(err); });
	};
	getData();

	$scope.subString = function(str, max){
		if(str.length > max)
			str = str.substring(0, max) + "...";
		return str;
	};

	$scope.logOut = function(){
		localStorageService.remove('_currentUser');
		AuthenticationService.setUser(null);
		$scope.layout.isHomePage = false;
		$state.go('login');
	};
	
});