'use strict';

angular.module( 'statesApp.controllers' )
  .controller( 'StatesController', [ '$scope', 'State', 'AbbrevList', function( $scope,  State ) {
    var states = [],
      partialList,
      offsetArray = [ 0, 10, 20, 30, 40 ],
      keyword = new RegExp( $scope.nameFilter, 'i'),
      getBatch = function() {
        offsetArray.forEach( function( index ) {
          partialList = State.query({ 'offset': index });
          states.push( partialList );

        });
      };

    getBatch();

    $scope.nameFilter = null;
    $scope.states = states;
    $scope.searchFilter = function ( state ) {
      return !$scope.nameFilter || keyword.test( state.name ) || keyword.test( state.abbreviation );
    }
  }])

  .controller( 'DetailController', [ '$scope', '$stateParams', 'Detail', function( $scope, $stateParams, Detail ) {

    console.log( 'are you getting the controller?' );
    $scope.abbreviation = $stateParams.abbreviation;
    console.log( $stateParams.abbreviation );

    var individual = function() {
      console.log( 'are you getting the controller2?' );
      Detail.get({ abbreviation: $stateParams.abbreviation }).$promise
        .then( function( data ) {
          console.log( data );
          $scope.lowercase = data.name.toLowerCase();
          return $scope.data = data;
        })
        .catch( function( status ) {
          console.log( status );
        });
    };
    individual();
  }]);
