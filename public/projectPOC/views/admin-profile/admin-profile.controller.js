/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("AdminProfileController", AdminProfileController);

    function AdminProfileController($rootScope,$scope,$location,UserService){
        $scope.users = UserService.users;
        $scope.profileUser = $rootScope.currentUser;
        $scope.deleteUser = deleteUser;
        $scope.profileUpdate = profileUpdate;
        $scope.updateUser = updateUser;

        function deleteUser(user){
            UserService.deleteUserById(user)
        }

        function profileUpdate(user){
            $scope.profileUser = UserService.findUserByCredentials(user);
        }

        function updateUser(user){
            var fillUser = UserService.fillInUser($scope.profileUser,user);
            var updateUser = UserService.findUserByCredentials(fillUser);
            if(updateUser){
                UserService.updateUser(updateUser._id,fillUser);
            }
        }
    }
})();