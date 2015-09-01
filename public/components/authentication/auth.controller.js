'use strict';

angular.module( 'statesApp.controllers' )
  .controller( 'AuthController', [ '$scope', '$location', 'Auth', 'User', function( $scope, $location, Auth, User ) {

    $scope.logIn = function logIn() {
      if ( $scope.handle !== undefined && $scope.password !== undefined ) {
        User.save( {}, { user: $scope.handle, password: $scope.password }).$promise
          .then( function() {
            Auth.isLoggedIn = true;
            console.log( 'user is logged in' );
            $location.path( '/states' );
          }).catch( function( status, data ) {
            Auth.isLoggedIn = false;
            console.log( status );
            console.log( data );
          });
      }
    };

    $scope.logOut = function logOut() {
      if ( Auth.isLoggedIn ) {
        console.log( 'user signed out' );
        Auth.isLoggedIn = false;
        $location.path( '/login' );
      }
    };

    //init();
  }]);
