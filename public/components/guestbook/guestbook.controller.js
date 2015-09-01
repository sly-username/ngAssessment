'use strict';

angular.module( 'statesApp.controllers' )
  .controller( 'GuestbookController', [ '$scope', 'Book', 'Publish', function( $scope, Book, Publish ) {

    $scope.guestbook = Book.query();

    $scope.savePost = function savePost() {
      Publish.create({}, { phone: $scope.telephone, message: $scope.message }).$promise
        .then( function ( response ) {
        $scope.message = response.message;
        $scope.phone = response.phone;
      })
      .catch( function ( status, data ) {
        console.log( status );
        console.log( data );
      });
    }

  }]);
