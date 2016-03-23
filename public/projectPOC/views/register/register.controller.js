/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location,$scope,$rootScope,UserService){
        $scope.users = UserService.users;


        $scope.newUser = function(user){
            UserService.createUser(user);
            $location.url("/home");
            console.log(user)
        }
    }
})();