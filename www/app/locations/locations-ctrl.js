(function() {
  'use strict';

  angular
    .module('eliteApp')
    .controller('LocationsCtrl', ['eliteApi',LocationsCtrl]);

  //NameController.$inject = ['dependencies'];

  function LocationsCtrl(eliteApi) {
    var vm = this;

    // OjO on $q os necessary ().then
    eliteApi.getLeagueData().then(function(data) {
      console.log(data)
      vm.locations = data.data;
    });

  }
})();
