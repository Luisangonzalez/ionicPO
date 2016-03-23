(function() {
	'use strict';

	angular
	  .module('eliteApp')
	  .controller('LocationCtrl', ['eliteApi'],LocationCtrl);

	//NameController.$inject = ['dependencies'];

	function LocationCtrl(eliteApi) {
		//content
		var vm= this;
		var data= eliteApi.getLeagueData();

		vm=data;
	}
})();