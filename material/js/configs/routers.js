angular.module('rpWeb.configs').config(function ($routeProvider){
	$routeProvider.otherwise({templateUrl: 'views/login.html'});
});