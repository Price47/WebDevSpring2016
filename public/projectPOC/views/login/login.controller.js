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
            var loginUser = UserService.findUserByCredentials(user);
            $rootScope.currentUser = loginUser;
            console.log(loginUser);
            console.log($rootScope.currentUser);
            if($rootScope.currentUser.role="admin"){
                $location.url("/profile")
            }
           else{
                $location.url("/profile")
            }
        }
    }
})();