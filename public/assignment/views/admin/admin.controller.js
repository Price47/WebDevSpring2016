/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("AdminController",AdminController);

    function AdminController($location, $scope, $rootScope, UserService){
        $scope.users = UserService.users;

        $scope.deleteUser = function(user) {
            console.log("delete");
            UserService.deleteUserById(user)
        };

        $scope.addUser = function(user){
            console.log("create " + user.username);
            UserService.createUser(user);
        };

        $scope.editUser = function(user){
            console.log("edit" + user);
            $rootScope.currentUser = user;
            $location.url("/profile");
        }

    }
})();