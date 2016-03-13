app.service('ProductService', function($http){

	return {
	    getProducts : function() {
	       	return $http.get('app/data.json');
	    }
	}
});