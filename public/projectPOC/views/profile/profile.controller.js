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
            var fillUser = UserService.fillInUser(user,$rootScope.currentUser);
            var updateUser = UserService.findUserByCredentials(fillUser);
            if(updateUser){
                UserService.updateUser(updateUser._id,fillUser);
                $location.url("/profile")
            }

        }

    }
})();