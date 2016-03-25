(function() {
    'use strict';

    angular
        .module('eliteApp')
        .controller('LocationMapCtrl', LocationMapCtrl);

    LocationMapCtrl.$inject = ['$stateParams', 'eliteApi'];

    /* @ngInject */
    function LocationMapCtrl($stateParams,eliteApi) {
        var vm = this;

        vm.locationId = Number($stateParams.id);

        vm.map = {
          center: {
            latitude: 38.897677,
            longitude: -77.036530
          },
          zoom:1000
        };

        vm.marker = {}


        eliteApi.getLeagueData().then(function(data){
          vm.location = _.find(data.locations, {id: vm.locationId});
          vm.marker = {
            latitude: vm.location.latitude,
            longitude: vm.location.longitude,
            tittle: vm.location.name + "<br/>(Tap for directions)",
            showWindow: true,
            id: vm.id = 1
          };
          vm.map.center.latitude = vm.location.latitude;
          vm.map.center.longitude = vm.location.longitude;
        });

        vm.locationClicked = function(marker){
          window.location = "geo:"+marker.latitude+","+marker.longitude+";u=35"
        }

    }
})();
