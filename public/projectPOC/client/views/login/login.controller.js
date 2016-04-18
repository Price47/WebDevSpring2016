/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService){


        $scope.login = login;

       function login(user) {
        if(user){
            UserService.login(user.username,user.password)
                .then(
                    function(response){
                        $rootScope.currentUser = response.data;
                        $location.url("/home")
                    },
                    function(err){
                        $scope.error = err;
                        $scope.errorMessage = "Incorrect Login info"
                    }
                )
        }

       }
    }


})();