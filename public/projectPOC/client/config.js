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
                controller: "ProfileController",
                resolve: {
                    loggedIn: checkUser
                }
            })
            .when("/profile-admin",{
                templateUrl: "views/admin-profile/admin-profile.view.html",
                controller: "AdminProfileController",
                resolve:{
                    loggedIn: checkAdmin
                }
            })
            .when("/register",{
                templateUrl: "views/register/register.view.html",
                controller: "RegisterController"
            })
            .when("/detail",{
                templateUrl:"views/detail/detail.view.html",
                controller:"DetailController",
                resolve:{
                    photoIndex: checkPhotoIndex
                }
            })
            .otherwise({
                redirectTo: "/home"
            })
    }

    var checkUser = function($q,$timeout,$location,$rootScope){
        var deferred = $q.defer();

        if($rootScope.currentUser){
            deferred.resolve();
        }
        else{
            deferred.reject();
        }

    return deferred.promise;
    };

    var checkAdmin = function($q,$timeout,$location,$rootScope){
        var deferred = $q.defer();

        if($rootScope.currentUser.role=='admin'){
            deferred.resolve();
        }
        else{
            deferred.reject();
        }
    return deferred.promise;
    };

    var checkPhotoIndex = function($q,$timeout,$location,$rootScope){
        var deferred = $q.defer();

        if($rootScope.photoIndex){
            deferred.resolve();
        }
        else{
            deferred.reject();
        }
        return deferred.promise;
    };






})();