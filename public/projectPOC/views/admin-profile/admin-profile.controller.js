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
        $scope.profileNavigate = profileNavigate;

        function deleteUser(user){
            UserService.deleteUserById(user)
        }

        function profileNavigate(user){
            var newUser = UserService.findUserByCredentials(user);
            if(newUser){
                if(newUser.role = "admin") {
                    $location.url("#/profile-admin")
                }
                else{
                    $location.url("#/profile")
                }
            }
            else{
                console.log("No user found")
            }
        }
    }
})();