'use strict';

angular
  .module( 'starsApp', [ 'ui.router', 'ngResource', 'starsApp.controllers', 'starsApp.services' ])
  .config( function( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise( '/login' );

    $stateProvider

      .state( 'home', {
        url: '/home',
        templateUrl: 'components/home/home.view.html',
        controller: 'HomeController'
      })

      .state( 'login', {
        url: '/login',
        templateUrl: 'components/authentication/login.view.html',
        controller: 'AuthController'
      })

      .state( 'logout', {
        url: '/logout',
        templateUrl: 'components/authentication/logout.view.html',
        controller: 'AuthController'
      })
  })

  //todo revert to login page if not logged in and trying to change routes
  .run( function( $rootScope, $location ) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ($rootScope.loggedInUser == null) {
        // no logged user, redirect to /login
        if ( next.templateUrl === "components/authentication/login.view.html" ) {
        } else {
          $location.path("/login");
        }
      }
    });
  });


angular
  .module( 'starsApp.controllers', [ 'starsApp.services' ]);

angular
  .module( 'starsApp.services', []);
