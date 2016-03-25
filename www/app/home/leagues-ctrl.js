(function() {
  'use strict';

  angular
    .module('eliteApp')
    .controller('LeaguesCtrl', ['$state', 'eliteApi', '$scope', LeaguesCtrl]);

  //LeaguesCtrl.$inject = ['$state', 'eliteApi', LeaguesCtrl];

  function LeaguesCtrl($state, eliteApi, $scope) {
    var vm = this;

		eliteApi.getLeagues().then(function(data) {
			vm.leagues = data.data;
			console.log(data.data);
		});

    vm.doRefresh = function() {
      console.log('Refrescao');
      // OjO on $q os necessary ().then
      eliteApi.getLeagues().then(function(data) {
        vm.leagues = data.data;
        console.log(data.data);
      }).finally(function() {
        $scope.$broadcast('scroll.refreshComplete');
      });
    }

    //var leagueData = eliteApi.getLeagueData();

    //console.log(leagues)

    // vm.leagues= leagues;

    vm.selectLeague = function(leagueID) {
      eliteApi.setLeagueId(leagueID);
      console.log('ID  ' + leagueID);

      $state.go("app.locations")
    }


  };

})();
