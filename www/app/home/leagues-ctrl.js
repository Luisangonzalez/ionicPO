/*
(function() {
	'use strict';

	angular.module('eliteApp').controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);

	function LeaguesCtrl($state, eliteApi) {
		var vm = this;

			//content
		var leagues = eliteApi.getLeagues();
		//var leagueData = eliteApi.getLeagueData();
		
		//console.log(leagues)

		vm.leagues= leagues;
	

	 };
})();
*/

(function() {
	'use strict';

	angular
	  .module('eliteApp')
	  .controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);

	//LeaguesCtrl.$inject = ['$state', 'eliteApi', LeaguesCtrl];

		function LeaguesCtrl($state, eliteApi) {
		var vm = this;

			//content
		var leagues = eliteApi.getLeagues();
		//var leagueData = eliteApi.getLeagueData();
		
		//console.log(leagues)

		vm.leagues= leagues;

		vm.selectLeague = function(leagueID){
			//TODO: select correct league
			$state.go("app.teams")
		}
	

	 };
	
})();