angular.module( 'statesApp.services' )
  .factory( 'Auth', function(){
    var auth = {
      isLoggedIn: false
    };

    return auth;
  })

  .factory( 'User', [ '$resource', function( $resource ) {
    return $resource(
      '/login'
    );
  }]);
