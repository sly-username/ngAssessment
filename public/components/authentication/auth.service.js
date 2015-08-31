angular.module( 'starsApp.services' )
  .factory( 'Auth', function(){
    var auth = {
      isLogged: false
    };

    return auth;
  })

  .factory( 'User', function( $resource ) {

    return $resource(
      '/login'
    );
  });
