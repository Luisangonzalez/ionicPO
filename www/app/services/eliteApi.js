(function() {
  'use strict';

  angular
    .module('eliteApp')
    .factory('eliteApi', ['$http', '$q', '$ionicLoading', '$cacheFactory', eliteApi]);

  // eliteApi.$inject = ['$http', '$q', '$ionicLoading', 'DSCacheFactory', '$cacheFactory', '$scope'];

  function eliteApi($http, $q, $ionicLoading, $cacheFactory) {

    var currentLeagueId;


    //Deprected NSCache, angualar-cache no oficial, oficial $cacheFactory
    function getCache(cache) {
      cache = $cacheFactory('cacheId');
      cache.put("key", "value");
      cache.put("another key", "another value");
      console.log(cache.info());
    }

    getCache();

    // self.leaguesCache = DSCacheFactory.get('leaguesCache');
    // self.leagueDataCache = DSCacheFactory.get('leagueDataCache');



    function getLeagues() {
      // Callbacks --> callback parameter
      // $http({
      //     method: 'GET',
      //     url: 'http://elite-schedule.net/api/leaguedata'
      //   })
      //   .then(function successCallback(data, status, headers, config) {
      //       callback(data);
      //     },
      //     function errorCallback(data, status, headers, config) {
      //
      //     });

      // $q
      var deferred = $q.defer(),
        cacheKey = 'leagues',
        leaguesData; // = self.leaguesCache.get(cacheKey)
      $ionicLoading.show({
        template: 'Loading...'
      });
      console.log('Leagues cache data' + leaguesData);
      if (leaguesData) {
        console.log('Found data insede cache ', leaguesData);
        deferred.resolve(leaguesData);
      } else {
        $http({
            method: 'GET',
            url: 'http://elite-schedule.net/api/leaguedata'
          })
          .then(function successCallback(data, status, headers, config) {
              /*
               Is posible use $timeout if you want wait this explicit time
               (inject $timeout before)
               $timeout(function(){
                  // todo
                 },time ms);

              */
              deferred.resolve(data);
              $ionicLoading.hide();
            },
            function errorCallback(data, status, headers, config) {
              $ionicLoading.hide();
              deferred.reject();
            });
        return deferred.promise;
      }

    }

    function getLeagueData() {
      var deferred = $q.defer();
      $http({
          method: 'GET',
          url: 'http://elite-schedule.net/api/leaguedata/2'
        })
        .then(function successCallback(data, status, headers, config) {
            console.log('Recived shedule data via HTTP on getLeagueData', data, status);
            deferred.resolve(data);
          },
          function errorCallback(data, status, headers, config) {
            console.log("Error while making HTTP call.");
            console.log(data);
            deferred.reject();
          });
      return deferred.promise;
    }




    function setLeagueId(leagueId) {
      currentLeagueId = leagueId;
    }

    return {
      getLeagues: getLeagues,
      getLeagueData: getLeagueData,
      setLeagueId: setLeagueId
    };
  }

})();
