/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService){

        $scope.login=login;

       function login(user){
            UserService.loginUser(user.username,user.password,function(response){
                $scope.user = response;
                $rootScope.user = response;
                console.log($rootScope.user)
            }
            )
        }
    }
})();