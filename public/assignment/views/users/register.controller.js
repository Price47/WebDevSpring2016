/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController",RegisterController);

    function RegisterController($location,$scope, UserService) {


        $scope.addUser = function (user) {
            UserService.createUser(user);
            UserService.setCurrentUser(user);
            $location.url("/profile");
            console.log(user);
        }
    }
})();