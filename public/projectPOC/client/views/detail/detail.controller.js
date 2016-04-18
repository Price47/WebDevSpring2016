/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("DetailController", DetailController);

    function DetailController($scope, $rootScope, $location, CommentService) {

        $scope.createMessage = createMessage;
        $scope.deleteCommentById = deleteCommentById;

        function init(){
            CommentService.readComments()
                .then(handleSuccess,handleError)
        }init();



        function createMessage(message){
            if($rootScope.currentUser) {
                var comment = {username: $rootScope.currentUser.username, message: message};
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
    }
})();