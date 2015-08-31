angular.module( 'statesApp.services' )
  .factory( 'Auth', [ '$state', 'User', function( $state, User ){
    var auth = {
      isLoggedIn: false
    };

    return auth;
  }])

  .factory( 'User', function( $resource ) {

    return $resource(
      '/login'
    );
  });
