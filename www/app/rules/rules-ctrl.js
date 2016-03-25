(function() {
    'use strict';

    angular
        .module('eliteApp')
        .controller('RulesCtrl', RulesCtrl);

    RulesCtrl.$inject = ['eliteApi'];

    /* @ngInject */
    function RulesCtrl(eliteApi) {
        var vm = this;

        // activate();

        // function activate() {
        //
        // }

        eliteApi.getLeagueData().then(function(data){
          console.log('Rules: ',data.data.league.rulesScreen);
          vm.mainContent = data.data.league.rulesScreen;
        });
    }
})();
