'use strict';

angular.module( 'statesApp.controllers' )
  .controller( 'StatesController', [ '$scope', 'State', 'AbbrevList', function( $scope,  State ) {
    var states = [],
      partialList,
      offsetArray = [ 0, 10, 20, 30, 40 ],
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
      var keyword = new RegExp( $scope.nameFilter, 'i' );
      $scope.abbreviation = state.abbreviation;
      return !$scope.nameFilter || keyword.test( state.name ) || keyword.test( state.abbreviation );
    }

  }])

  .controller( 'DetailController', [ '$scope', 'Detail', function( $scope, Detail ) {
    Detail.get({ abbreviation: 'CA' }).$promise
      .then( function( data ) {
        $scope.name = data.name;
        $scope.capital = data.capital;
        $scope.population = data.population;
      });
  }]);
