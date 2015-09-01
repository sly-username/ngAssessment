angular.module( 'statesApp.services' )
  .factory( 'State', function( $resource ){
    return $resource( '/states/:abbreviation' );
  })

  .factory( 'Detail', [ '$resource', function( $resource ) {
    return $resource( '/states/:abbreviation' );
  }])

  .factory ( 'AbbrevList', [ '$resource',  function( $resource ) {
    return $resource(
      '/states/abbreviations'
    )
  }]);
