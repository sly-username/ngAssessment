'use strict';

angular
  .module( 'statesApp', [ 'ui.router', 'ngResource', 'statesApp.controllers', 'statesApp.services' ])
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

      // todo change the authentication stuff back to true
      .state( 'guestbook', {
        url: '/guestbook',
        views: {
          '': {
            templateUrl: 'components/guestbook/guestbook.view.html',
            controller: 'GuestbookController'
          },
          'form@guestbook': {
            templateUrl: 'components/guestbook/guestbook.form.view.html',
            controller: 'GuestbookController'
          }
        },
        authenticate: false
      })

      .state( 'states', {
        url: '/states',
        views: {
          '': {
            templateUrl: 'components/states/states.view.html',
            controller: 'StatesController'
          },
          'individual@states': {
            templateUrl: 'components/states/states.individual.view.html',
            controller: 'DetailController'
          }
        },
        authenticate: false
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
        authenticate: false
      })
  })

  //todo revert to login page if not logged in and trying to change routes
  .run( function ( $rootScope, $state, Auth ) {
    $rootScope.$on( '$stateChangeStart',
      function( event, toState, toParams, fromState, fromParams ) {
        if ( toState.authenticate && !Auth.isLoggedIn ) {
          $state.go( 'login' );
          event.preventDefault();
        }
      })
    });


angular
  .module( 'statesApp.controllers', [ 'statesApp.services' ]);

angular
  .module( 'statesApp.services', []);
