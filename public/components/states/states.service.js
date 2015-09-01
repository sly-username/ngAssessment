angular.module( 'statesApp.services' )
  .factory( 'State', function( $resource ){
    return $resource(
      '/states/:abbreviation',
      { abbreviation: '@abbreviation' }
    );
  })
  .factory ( 'AbbrevList', function( $resource ) {
  return $resource(
    '/states/abbreviations'
  )
});
