/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("AdminProfileController", AdminProfileController);

    function AdminProfileController($rootScope,$scope,$location,UserService){


        $scope.deleteUser = deleteUser;
        $scope.selectUser = selectUser;
        $scope.updateUser = updateUser;
        $scope.createUser = createUser;

        UserService.readUsers(function(response){
            $scope.users=response;
        });


        function selectUser(index){
            $scope.selectedUserIndex = index
        }

        function createUser(user){
            UserService.createUser(user,function(response){
                $scope.users = response;
            })
        }

        function deleteUser(id){
            UserService.deleteUserById(id,function(response){
                $scope.users=response;
            })
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