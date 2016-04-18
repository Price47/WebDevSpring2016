

(function(){

    angular
        .module("ProjectApp")
        .controller("AdminProfileController", AdminProfileController);

    function AdminProfileController($rootScope,$scope,$location,UserService){

        var vm = this;

        $scope.deleteUser = deleteUser;
        $scope.selectUser = selectUser;
        $scope.updateUser = updateUser;
        $scope.createUser = createUser;



        function init(){
            UserService.readUsers()
                .then(handleSuccess,handleError)
        }init();


        function selectUser(index){
            $scope.selectedUserIndex = index;
            $scope.user = $scope.users[index];
            $rootScope.currentUser = $scope.users[index];
            console.log($rootScope.currentUser.role[0])
        }

        function createUser(user){
            UserService.createUser(user)
                .then(handleSuccess,handleError)
        }

        function deleteUser(id) {
            UserService.deleteUserById(id)
                .then(handleSuccess, handleError);
            $scope.user=null;
        }

        function updateUser(user){
            UserService.updateUser(user)
                .then(handleSuccess,handleError)

        }

        function handleSuccess(response){
            $scope.users = response.data;
        }

        function handleError(err){
            $scope.error = err;
        }
    }
})();