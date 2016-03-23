(function() {
	'use strict';

	angular
	  .module('eliteApp')
	  .factory('eliteApi', eliteApi);

	//NameFactory.$inject = ['dependencies'];

//	function NameFactory(dependencies) {
		//content
//	}
	function eliteApi() {

		var leagues = JSON.parse('[{"id":1,"name":"7th Grade MS JV Friday 2013-14 League","isArchived":true,"href":"/api/leaguedata/1"},{"id":2,"name":"7th Grade MS JV Saturday 2013-14 League","isArchived":true,"href":"/api/leaguedata/2"},{"id":3,"name":"8th Grade MS Varsity Friday 2013-14 League","isArchived":true,"href":"/api/leaguedata/3"},{"id":1003,"name":"8th Grade MS Varsity Saturday 2013-14 League","isArchived":true,"href":"/api/leaguedata/1003"},{"id":1004,"name":"6th Grade Friday 2013-14 League","isArchived":true,"href":"/api/leaguedata/1004"},{"id":1005,"name":"5th Grade Saturday 2013-14 League","isArchived":true,"href":"/api/leaguedata/1005"},{"id":2005,"name":"March Madness Tournament 2014","isArchived":true,"href":"/api/leaguedata/2005"},{"id":2007,"name":"Friday Spring 6th Grade","isArchived":true,"href":"/api/leaguedata/2007"},{"id":2008,"name":"7th Grade HYBA Spring 2014","isArchived":true,"href":"/api/leaguedata/2008"},{"id":2009,"name":"Spring Fling Tournament 2014","isArchived":true,"href":"/api/leaguedata/2009"},{"id":2010,"name":"Metro Classic 2014","isArchived":true,"href":"/api/leaguedata/2010"},{"id":2011,"name":"Summer Showdown 2014","isArchived":false,"href":"/api/leaguedata/2011"},{"id":2012,"name":"8th Grade HYBA Fall 2014","isArchived":true,"href":"/api/leaguedata/2012"},{"id":2014,"name":"test","isArchived":false,"href":"/api/leaguedata/2014"},{"id":2015,"name":"Steve Test - Summer Showdown","isArchived":false,"href":"/api/leaguedata/2015"},{"id":2016,"name":"Bill Test Summer Showdown","isArchived":false,"href":"/api/leaguedata/2016"},{"id":2018,"name":"Steve-Bill Test","isArchived":false,"href":"/api/leaguedata/2018"},{"id":2019,"name":"Laker Challenge 2014","isArchived":false,"href":"/api/leaguedata/2019"},{"id":2020,"name":"HCYP 4th Grade Girls Rec 2014-2015","isArchived":false,"href":"/api/leaguedata/2020"},{"id":2023,"name":"Ballin in the Fall ","isArchived":false,"href":"/api/leaguedata/2023"},{"id":2024,"name":"7th Grade MS JV Friday 2014-15 League","isArchived":false,"href":"/api/leaguedata/2024"},{"id":2025,"name":"7th Grade MS JV Saturday 2014-15 League","isArchived":false,"href":"/api/leaguedata/2025"},{"id":2026,"name":"8th Grade MS Varsity Friday 2014-15 League","isArchived":false,"href":"/api/leaguedata/2026"},{"id":2027,"name":"8th Grade MS Varsity Saturday 2014-15 League","isArchived":false,"href":"/api/leaguedata/2027"},{"id":2028,"name":"7th-8th Grade HC Invitational 2014-15 League","isArchived":false,"href":"/api/leaguedata/2028"},{"id":2029,"name":"6th Grade Saturday 2014-15 League","isArchived":false,"href":"/api/leaguedata/2029"},{"id":2032,"name":"Ballin the Fall - Test","isArchived":false,"href":"/api/leaguedata/2032"},{"id":2034,"name":"March Madness 2015 Tournament","isArchived":false,"href":"/api/leaguedata/2034"},{"id":2035,"name":"8th Grade HYBA Spring 2015","isArchived":false,"href":"/api/leaguedata/2035"},{"id":2036,"name":"Friday Spring 2015 13U HCMS","isArchived":false,"href":"/api/leaguedata/2036"},{"id":2037,"name":"Friday Spring 2015 13U LEMS","isArchived":false,"href":"/api/leaguedata/2037"},{"id":2039,"name":"Spring Fling 2015 Tournament","isArchived":false,"href":"/api/leaguedata/2039"},{"id":2040,"name":"Metro Classic 2015 Tournament","isArchived":false,"href":"/api/leaguedata/2040"},{"id":3037,"name":"Summer Showdown 2015 Tournament","isArchived":false,"href":"/api/leaguedata/3037"},{"id":3039,"name":"Ballin in Fall 2015 - Ricky Knight Memorial Tournament","isArchived":false,"href":"/api/leaguedata/3039"},{"id":3040,"name":"March Madness 2016 Tournament","isArchived":false,"href":"/api/leaguedata/3040"},{"id":3041,"name":"March Madness Tournament 2016","isArchived":false,"href":"/api/leaguedata/3041"}]');
		//content

		function getLeagues(){
			return leagues;
		}

		//function getLeagueData(){
		//	return leagueData;
	//	}

		return {
			getLeagues: getLeagues
			//getLeagueData: getLeagueData
		};
	}	

})();