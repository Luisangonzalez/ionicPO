(function() {
    'use strict';

    angular
        .module('eliteApp')
        .directive('markdown', [markdown]);

    /* @ngInject */
    function markdown() {

      // Usage:
      // <div data-markdown="{{vm.content}}"></div>

      var convert = new showdown.Converter();

        var directive = {
            restrict: 'A',  // ??
            // templateUrl: 'templateUrl',
            // scope: {
            // },
            link: linkFunc
            // controller: Controller,
            // controllerAs: 'vm',
            // bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr) {
          attr.$observe('markdown', function(value){
            var markup = convert.makeHtml(value);
            el.html(markup);
          });
        }
    }

    // Controller.$inject = ['dependencies'];

    /* @ngInject */
    // function Controller(dependencies) {
    //     var vm = this;
    //
    //     activate();
    //
    //     function activate() {
    //
    //     }
    // }
})();
