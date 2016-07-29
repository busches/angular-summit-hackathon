'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:TypeDetailsCtrl
 * @description
 * # TypeDetailsCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('TypeDetailsCtrl', [
    'TypesFactory', '$routeSegment',
    function(typesFactory, $routeSegment) {
      var vm = this;
      vm.details = [];
      vm.date = new Date();

      vm.getTypeName = function(id) {
        return typesFactory.getType(id).name;
      };

      vm.update = function(d) {
        var id = $routeSegment.$routeParams.id;
        var start = moment(d).startOf('month').unix();
        var end = moment(d).endOf('month').unix();
        typesFactory.getTypeDetails(id, start, end).then(function(data) {
          vm.details = data;
        });
      };
    }
]);
