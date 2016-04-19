/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("DetailController", DetailController);

    function DetailController($scope, $rootScope, $location, PhotoService,CommentService) {

        $scope.createMessage = createMessage;
        $scope.deleteCommentById = deleteCommentById;
        $scope.next = next;
        $scope.previous = previous;

        function init(){

            PhotoService.readPhotos()
                .then(handlePhoto,handlePhotoErr);

        }init();


        function next(){
            if($rootScope.photoIndex == ($scope.photos.length-1)){
                $rootScope.photoIndex = 0;
            }
            else{
                $rootScope.photoIndex++;
            }
            CommentService.readCommentByPictureId($scope.photos[$rootScope.photoIndex]._id)
                .then(handleSuccess,handleError)
        }

        function previous(){
            if($rootScope.photoIndex == 0){
                $rootScope.photoIndex = ($scope.photos.length-1)
            }
            else{
                $rootScope.photoIndex = $rootScope.photoIndex-1
            }
            CommentService.readCommentByPictureId($scope.photos[$rootScope.photoIndex]._id)
                .then(handleSuccess,handleError)
        }
        function createMessage(message){
            if($rootScope.currentUser) {
                var comment = {pictureId: $scope.photos[$rootScope.photoIndex]._id,
                    username: $rootScope.currentUser.username,
                    message: message};
                CommentService.createComment(comment)
                    .then(handleSuccess, handleError);
                $scope.message = null
            }
        }

        function deleteCommentById(id){
            CommentService.deleteCommentById(id)
                .then(handleSuccess,handleError)
        }
        function handleSuccess(response){
            $scope.comments = response.data;
        }

        function handleError(err){
            $scope.error = err;
        }

        function handlePhoto(response){
            $scope.photos=response.data;
            CommentService.readCommentByPictureId($scope.photos[$rootScope.photoIndex]._id)
                .then(handleSuccess,handleError)

        }

        function handlePhotoErr(err){
            $scope.photoErr = err;
        }
    }
})();