(function() {
	'use strict';

	angular
	  .module('eliteApp')
	  .controller('teamDetailCtrl', ['$stateParams',teamDetailCtrl]);

	function teamDetailCtrl($stateParams) {
		//content
		var vm = this;

		console.log("$stateParams", $stateParams);
	};
})();