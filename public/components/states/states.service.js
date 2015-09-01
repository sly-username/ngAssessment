angular.module( 'statesApp.services' )
  .factory( 'State', function( $resource ){
    return $resource(
      '/states/:abbreviation'
    );
  })

  .factory( 'Detail', [ '$resource', '$scope', function( $resource, $scope ) {
    return $resource( '/states/' + $scope.abbreviation );
  }])

  .factory ( 'AbbrevList', [ '$resource',  function( $resource ) {
    return $resource(
      '/states/abbreviations'
    )
  }]);
