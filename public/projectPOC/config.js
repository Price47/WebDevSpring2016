/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .config(Configuration);

    function Configuration($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html",
                controller:"HomeController"
            })
            .when("/login",{
                templateUrl: "views/login/login.view.html",
                controller: "LoginController"
            })
            .when("/profile",{
                templateUrl: "views/profile/profile.view.html",
                controller: "ProfileController"
            })
            .when("/register",{
                templateUrl: "views/register/register.view.html",
                controller: "RegisterController"
            })
            .otherwise({
                redirectTo: "/home"
            })
    }


})();