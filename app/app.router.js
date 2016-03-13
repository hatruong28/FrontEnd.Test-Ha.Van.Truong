app.run(function($rootScope, $state, $window, localStorageService, AuthenticationService){

    $rootScope.layout = {
        isHomePage: false
    };

    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        if (toState.authenticate && !AuthenticationService.isLoggedIn()) {
            $state.go("login");
            event.preventDefault();
        } else if (toState.name == 'login' && AuthenticationService.isLoggedIn()) {
            $state.go("home");
            event.preventDefault();
        }
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $window.scrollTo(0, 0);
    });

    if (localStorageService.get('_currentUser')) {
        $rootScope.user = localStorageService.get('_currentUser');
    } else {
        localStorageService.set('_currentUser', $rootScope.user);
    }

});

app.config(function($stateProvider, $urlRouterProvider, $controllerProvider, $ocLazyLoadProvider, scripts){

    app.controller = $controllerProvider.register;

    $ocLazyLoadProvider.config({
        debug: true,
        events: true,
        modules: scripts
    });

	$stateProvider
	.state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginController',
        resolve: {
            LoginController: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('LoginCtrl');
            }]
        },
        authenticate: false
    })
    .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        resolve: {
            HomeController: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('HomeCtrl');
            }]
        },
        authenticate: true
    })
    .state('home.product', {
        url: '/product/:productID',
        templateUrl: 'app/components/product/product.html',
        controller: 'ProductController',
        resolve: {
            ProductController: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('ProductCtrl');
            }]
        },
        authenticate: true
    });
    $urlRouterProvider.otherwise("/home");
    
});