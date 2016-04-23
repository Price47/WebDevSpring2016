/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope,$scope,$http,$location,UserService,PhotoService) {

        $scope.profileUser = $rootScope.currentUser;
        $scope.editRolesBoolean = false;
        $scope.uploadBoolean = false;
        $scope.userPhotosBoolean = true;
        $scope.favoritePhotosBoolean = false;



        $scope.update = update;
        $scope.uploadFile = uploadFile;
        $scope.editRole = editRole;
        $scope.detailView = detailView;
        $scope.uploadLink = uploadLink;
        $scope.uploadPicture = uploadPicture;
        $scope.showAllPhotos = showAllPhotos;
        $scope.showUserPhotos = showUserPhotos;
        $scope.showFavoritePhotos = showFavoritePhotos;
        $scope.removePhoto = removePhoto;

        function init() {
            PhotoService.readPhotosByUser($rootScope.currentUser._id)
                .then(handleSuccess, handleError);

            PhotoService.readUserPhotos($rootScope.currentUser._id)
                .then(handleUserPhotoSuccess, handleError)


        }
        init();

        function removePhoto(index){
            var photoId = $scope.userPhotos[index]._id;

            PhotoService.deletePhotoById(photoId)
                .then(
                    PhotoService.readUserPhotos($rootScope.currentUser._id)
                        .then(handleUserPhotoSuccess,handleError)
                    ,handleError
                )
        }

        function showAllPhotos(){
            $scope.userPhotosBoolean = true;
            $scope.favoritePhotosBoolean = true;
        }

        function showUserPhotos(){
            $scope.userPhotosBoolean = true;
            $scope.favoritePhotosBoolean = false;
        }

        function showFavoritePhotos(){
            $scope.userPhotosBoolean = false;
            $scope.favoritePhotosBoolean = true;
        }

        function uploadLink(){
            $scope.uploadBoolean = !$scope.uploadBoolean;
        }

        function uploadPicture(file){
            if(file) {
                var photo = {picture: String(file), createdBy: $scope.profileUser._id};

                PhotoService.uploadPhoto(photo)
                    .then(
                        PhotoService.readUserPhotos($scope.profileUser._id)
                            .then(handleUserPhotoSuccess, handleError),
                        handleError);

                $scope.file = null;
                $scope.uploadBoolean = false;
            }
        }


        function detailView(index) {
            $rootScope.photoIndex = index;
            $location.url("/detail")
        }

        function uploadFile() {
            var file = $scope.myFile;
            $http.post("/upload", file)
        }

        function editRole() {
            $scope.editRolesBoolean = !$scope.editRolesBoolean
        }

        function update(user) {
            UserService.updateUser(user);
            $scope.editRolesBoolean = false;
        }

        function handleSuccess(response) {
            $scope.favoritePhotos = response.data;
        }

        function handleUserPhotoSuccess(response){
            $scope.userPhotos = response.data
        }

        function handleError(err) {
            $scope.error = err;
        }

    }
})();