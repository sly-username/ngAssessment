'use strict';

angular
  .module( 'starsApp', [ 'ui.router', 'ngResource', 'starsApp.controllers', 'starsApp.services' ])
  .config( function( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise( '/home' );

    $stateProvider

      .state( 'home', {
        url: '/home',
        templateUrl: 'components/home/homeView.html',
        controller: 'HomeCtrl',
        access: { requiredLogin: false }
      })

      .state( 'login', {
        url: '/login',
        templateUrl: 'components/authentication/login.view.html',
        controller: 'AuthController',
        access: { requiredLogin: true }
      })

      .state( 'logout', {
        url: '/logout',
        templateUrl: 'components/authentication/logout.view.html',
        controller: 'AuthController',
        access: { requiredLogin: true }
      })
  });


angular
  .module( 'starsApp.controllers', [ 'starsApp.services' ]);

angular
  .module( 'starsApp.services', []);
