(function() {
	'use strict';

	angular
	  .module('eliteApi')
	  .controller('teamCtrl', teamCtrl);

	teamCtrl.$inject = ['eliteApi'];

	function teamCtrl(eliteApi) {
		//content
		var vm=this;

		eliteApi.getLeagueData().then(function(data) {
		vm.teams = data.teams;
		console.log('teams '+data.teams);

		});
	}
})();
