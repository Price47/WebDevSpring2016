/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope,$scope,$http,UserService,PhotoService){

        $scope.profileUser = $rootScope.currentUser;
        $scope.editRolesBoolean = false;

        $scope.update = update;
        $scope.uploadFile = uploadFile;
        $scope.editRole = editRole;

        function uploadFile(){
            var file = $scope.myFile;
            $http.post("/upload",file)
        }

        function editRole(){
            $scope.editRolesBoolean = !$scope.editRolesBoolean
        }

        function update(user){
            UserService.updateUser(user);
        }

    }
})();