

(function(){

    angular
        .module("ProjectApp")
        .controller("AdminProfileController", AdminProfileController);

    function AdminProfileController($rootScope,$scope,$location,UserService,PhotoService){



        $scope.deleteUser = deleteUser;
        $scope.selectUser = selectUser;
        $scope.updateUser = updateUser;
        $scope.createUser = createUser;
        $scope.deletePhoto = deletePhoto;



        function init(){
            UserService.readUsers()
                .then(handleSuccess,handleError);

            PhotoService.readPhotos()
                .then(handlePhotoSuccess, handlePhotoError);
        }init();

        function deletePhoto(id){
            PhotoService.deletePhotoById(id)
                .then(handlePhotoSuccess,handlePhotoError);
        }


        function selectUser(index){
            $scope.selectedUserIndex = index;
            $scope.user = $scope.users[index];
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

        function handlePhotoSuccess(response){
            $scope.photos = response.data;
        }

        function handlePhotoError(err){
            $scope.photoError = err;
        }
    }
})();