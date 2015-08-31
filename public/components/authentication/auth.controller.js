'use strict';

angular.module( 'starsApp.controllers' )
  .controller( 'AuthController', [ '$scope', '$location', 'Auth', 'User', function( $scope, $location, Auth, User ) {

    $scope.logIn = function logIn() {

      if ( $scope.handle !== undefined && $scope.password !== undefined ) {
        User.save( {}, { user: $scope.handle, password: $scope.password }).$promise
          .then( function() {
            Auth.isLogged = true;
            console.log( 'user is logged in' );
            $location.path( '/guestbook' );
          }).catch( function( status, data ) {
            Auth.isLogged = false;
            console.log( status );
            console.log( data );
          });
      }
    };

    $scope.logout = function logout() {
      if ( Auth.isLogged ) {
        console.log( 'user signed out' );
        Auth.isLogged = false;
        $location.path( '/login' );
      }
    }
  }]);
