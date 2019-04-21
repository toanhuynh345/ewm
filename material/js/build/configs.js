angular.module('rpWeb.configs').config(function (){
	
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|mailto|geo|tel|maps|comgooglemaps|ws|wss):/);
	
	$stateList	= {
		home	: {
			url			: '/home',
			templateUrl	: 'views/home.html'
		},
		login	: {
			url			: '/login',
			templateUrl	: 'views/auth/login.html'
		},
	};
	
	// Config All Router
	angular.forEach($stateList, function (configs, name) {
		var routerConfigs	= configs || {};
		routerConfigs.name	= name;		
		
		// Add to router
		$routeProvider.when(routerConfigs.url, routerConfigs);
	});
	$routeProvider.otherwise({templateUrl: 'views/login.html'});
});