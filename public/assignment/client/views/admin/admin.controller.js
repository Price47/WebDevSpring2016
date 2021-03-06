/**
 * Created by rockstar645 on 2/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("AdminController",AdminController);

    function AdminController($location, $scope, $rootScope, $http, UserService){


        UserService.readAllUsers(renderUsers);



        $scope.selectUser = selectUser;
        $scope.deleteUser = deleteUser;
        $scope.addUser = addUser;
        $scope.updateUser = updateUser;



        function renderUsers(response){
            $scope.users = response
        }

        function selectUser(index)
        {
            $scope.selectedUserIndex = index;
            UserService.readUser(index,function(response)
            {
                $scope.user = response;
            })
        }

        function deleteUser(index)
        {
            UserService.deleteUserByIndex(index,renderUsers)
        }

        function addUser(user){
            UserService.createUser(user,renderUsers)
        }

        function updateUser(user){
            UserService.updateUserByIndex($scope.selectedUserIndex,user,renderUsers)
        }




    }
})();