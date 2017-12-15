app.run(run).config(config);
function run($rootScope,$localStorage,$location) {
    $rootScope.$on("$stateChangeStart",function(event,
                                                fromState,
                                                fromParams,
                                                toState,
                                                toParams){
        if(!$localStorage.web page){
            $location.path("/login");
        }
    });
};


function config($stateProvider,$urlRouterProvider) {
    $stateProvider.state("login",{url:"/login",templateUrl:"templates/login.html",controller:"loginController"})
                  .state("home",{url:"/home",templateUrl:"templates/home.html",controller:"homeController"})
                  .state("home.static",{url:"/static",templateUrl:"templates/static.html",controller:"static"})
                  .state("home.mysql",{url:"/mysql",templateUrl:"templates/mysql.html",controller:"mysql"})
    $urlRouterProvider.otherwise("/login");
}