'use strict';

angular.module( 'statesApp.controllers' )
  .controller( 'StatesController', [ '$scope', 'State', 'AbbrevList', function( $scope,  State ) {
    var i = 0,
      batchIndex = 0,
      maxIndex = 50,
      states = [],
      //getBatch = function( batchIndex ) {
      //  var partialList = State.query({ 'offset': batchIndex });
      //  console.log( 'here?', partialList );
      //  Array.prototype.push.apply( states, partialList );
      //  return states;
      //},
      //getStates = function( nextIndex ) {
      //  if( nextIndex >= maxIndex ) {
      //  console.log( 'last', batchIndex );
      //    return false
      //  }
      //
      //  return getBatch( batchIndex, function() {
      //    console.log( '1?', batchIndex );
      //    getStates( batchIndex + 10 );
      //    console.log( '2?', batchIndex );
      //  });
      //};
      getStates = function() {
        for ( ; i < maxIndex; i+10 ) {
          var partialList = State.query({ 'offset': i });
          var test = states.concat( partialList );
        }
        console.log( test );
      };

    getStates();
    console.log( states );
    $scope.nameFilter = null;
    $scope.states = states;

    $scope.searchFilter = function ( state ) {
      var keyword = new RegExp( $scope.nameFilter, 'i' );
      return !$scope.nameFilter || keyword.test( state.name ) || keyword.test( state.abbreviation );
    }

  }]);
