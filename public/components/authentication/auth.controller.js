'use strict';

angular.module( 'starsApp.controllers' )
  .controller( 'AuthController', [ '$scope', '$location', '$rootScope', 'Auth', 'User', function( $scope, $location, $rootScope, Auth, User ) {

    $scope.logIn = function logIn() {
      if ( $scope.handle !== undefined && $scope.password !== undefined ) {
        User.save( {}, { user: $scope.handle, password: $scope.password }).$promise
          .then( function() {
            Auth.isLogged = true;
            $rootScope.loggedInUser = $scope.handle;
            console.log( 'user is logged in' );
            $location.path( '/home' );
          }).catch( function( status, data ) {
            Auth.isLogged = false;
            $rootScope.loggedInUser = null;
            console.log( status );
            console.log( data );
          });
      }
    };

    $scope.logout = function logout() {
      if ( Auth.isLogged ) {
        console.log( 'user signed out' );
        Auth.isLogged = false;
        $rootScope.loggedInUser = null;
        $location.path( '/login' );
      }
    }
  }]);
