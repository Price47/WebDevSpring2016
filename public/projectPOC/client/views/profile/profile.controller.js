/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope,$scope,$location,UserService){

        $scope.profileUser = $rootScope.currentUser;
        $scope.update = update;


        function update(user){
            UserService.updateUser(user);
        }

    }
})();