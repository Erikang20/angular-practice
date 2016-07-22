var app = angular.module( "myApp", [ 'ngRoute' ] );

app.config( function ( $routeProvider ) {
	$routeProvider.when( '/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	} ).
	when( '/dogs', {
		templateUrl: 'partials/dogs.html',
		controller: 'DogsController'
	} )

} )

app.controller( 'HomeController', function ( $scope ) {
	console.log( 'hey' );
	$scope.view = {};
	$scope.view.message = "Welcome!"
} );

app.controller( 'DogsController', function ( $scope ) {
	$scope.view = {};
	$scope.view.message = "Woof Woof!"

	//angular gets books from the server
	$http.get( '/books' ).then( function ( data ) {

	} )

} )
