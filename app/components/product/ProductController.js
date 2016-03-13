app.controller('ProductController', function($scope, $stateParams, localStorageService, ProductService){

	var getData = function(){
		ProductService.getProducts().success(function(data){
			$scope.product = data[$stateParams.productID];
		}).error(function(err){ console.log(err); });
		//get comments for current product
		var comments = localStorageService.get('commentsFor' + $stateParams.productID);
		if(comments){
			$scope.comments = comments;
		} else {
			$scope.comments = [];
		}
	};
	getData();

	$scope.postComment = function(){
		var content = $scope.commentContent;
		$scope.commentContent = '';
		if(content){
			$scope.comments.push(new Comment(content, new Date(), $scope.user));
			localStorageService.set('commentsFor' + $stateParams.productID, $scope.comments);
		}
	};

});

function Comment (content, createdTime, author){
	this.content = content;
	this.createdTime = createdTime;
	this.author = author;
}