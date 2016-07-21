var app = angular.module( "test", [ 'ngRoute' ] );

app.controller( 'another', function ( $scope ) {
	$scope.test = "blah";


	app.config( function ( $routerProvider ) {
		$routerProvider.when( '/', {
				templateUrl: 'partials/home.html',
				controller: 'HomeController'
			} )
			.when( '/dogs', {
				templateUrl: 'partials/dogs.html',
				controller: 'DogsController'
			} )
	} )

} );

app.controller( 'HomeController', function ( $scope ) {
	$scope.view = {};
	$scope.view.message = "Welcome!"
} )
