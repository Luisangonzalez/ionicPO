(function() {
	'use strict';

	angular
	  .module('eliteApi')
	  .controller('teamCtrl', teamCtrl);

	teamCtrl.$inject = ['eliteApi'];

	function teamCtrl(eliteApi) {
		//content
		var vm=this;

		//var data = eliteApi.getLeagueData();
		vm.teams = data.teams;
	}
})();