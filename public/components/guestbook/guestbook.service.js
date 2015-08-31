angular.module( 'starsApp.services' )
  .factory( 'Book', function( $resource ) {

    return $resource( '/read' );
  })
  . factory ( 'Publish', function( $resource ) {
    return $resource( '/write' );
  });
