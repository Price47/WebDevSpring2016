/**
 * Created by rockstar645 on 3/8/16.
 */
(function() {

        angular
            .module("ProjectApp")
            .controller("HomeController",HomeController);


        function HomeController($location, $scope, $rootScope, UserService){
            $scope.users = UserService.users;

            $scope.deleteUser = function(user){
                UserService.deleteUserById(user)
            }
        }

    }
)();