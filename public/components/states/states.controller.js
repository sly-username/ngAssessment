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

  .controller( 'DetailController', [ '$scope', '$routeParams', 'Detail', function( $scope, $routeParams, Detail ) {
    $scope.abbreviation = $routeParams.abbreviation;

    $scope.getDetails = function() {
      Detail.get({ abbreviation: $scope.abbreviation }).$promise
        .then( function( data ) {
          console.log( data );
          $scope.individual = data;
        });
    };
  }]);
