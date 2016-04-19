(function() {
    angular
        .module("ProjectApp")
        .factory("CommentService", CommentService);

    function CommentService($rootScope, $http) {
        var api = {


            createComment: createComment,
            readCommentById: readCommentById,
            readCommentByPictureId: readCommentByPictureId,
            updateComment: updateComment,
            deleteCommentById: deleteCommentById,
            readComments: readComments
        };
        return api;

        function createComment(comment) {
            return $http.post("/api/comment",comment)
        }

        function readCommentById() {
        }

        function readCommentByPictureId(pictureId){
            return $http.get("/api/comment/picture/" + pictureId)
        }

        function updateComment() {
        }

        function deleteCommentById(id) {
            return $http.delete("/api/comment/" + id)
        }

        function readComments(){
            return $http.get("/api/comment")
        }

    }
})();