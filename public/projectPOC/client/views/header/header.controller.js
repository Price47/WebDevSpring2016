/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($rootScope,$scope, $location, UserService){

        $scope.logout = logout;
        $scope.searchUser = searchUser;

        function searchUser(){
            UserService.readUserByUsername($scope.user)
        }

        function logout(){
            $rootScope.currentUser = null
            $location.url("/home")
        }
    }
})();