'use strict';

angular.module( 'starsApp.controllers' )
  .controller( 'GuestbookController', [ '$scope', 'Book', 'Publish', '$location',function( $scope, Book, Publish, $location ) {

    $scope.guestbook = Book.query();

    $scope.savePost = function savePost() {
      var post = new Publish();
      Publish.save({}, { phone: $scope.telephone, message: $scope.message }).$promise
        .then( function ( response ) {
          $scope.message = response.message;
          $scope.phone = response.phone;
          console.log( post );
          $scope.guestbook.push( post );
      })
        .catch( function ( status, data ) {
          console.log( status );
          console.log( data );
        });
    }

  }]);
