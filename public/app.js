'use strict';

angular
  .module( 'starsApp', [ 'ui.router', 'ngResource', 'starsApp.controllers', 'starsApp.services' ])
  .config( function( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise( '/login' );

    var authenticated = ['$q', 'Auth', function ($q, Auth) {
      var deferred = $q.defer();
      Auth.isLoggedIn(false)
        .then(function (isLogged) {
          if (isLogged) {
            deferred.resolve();
          } else {
            deferred.reject('Not logged in');
          }
        });
      return deferred.promise;
    }];

    $stateProvider

      .state( 'home', {
        url: '/home',
        templateUrl: 'components/home/home.view.html',
        controller: 'HomeController',
        authenticate: true
      })

      .state( 'login', {
        url: '/login',
        templateUrl: 'components/authentication/login.view.html',
        controller: 'AuthController',
        authenticate: false
      })

      .state( 'logout', {
        url: '/logout',
        templateUrl: 'components/authentication/logout.view.html',
        controller: 'AuthController',
        authenticate: true
      })
  })

  //todo revert to login page if not logged in and trying to change routes
  .run(function ($rootScope, $state, Auth ) {
    $rootScope.$on("$stateChangeStart",
      function(event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate && !Auth.isLoggedIn ) {
          $state.go("login");
          event.preventDefault();
        }
      })
    });


angular
  .module( 'starsApp.controllers', [ 'starsApp.services' ]);

angular
  .module( 'starsApp.services', []);
