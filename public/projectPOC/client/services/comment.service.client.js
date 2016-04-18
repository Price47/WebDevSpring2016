(function() {
    angular
        .module("ProjectApp")
        .factory("CommentService", CommentService);

    function CommentService($rootScope, $http) {
        var api = {


            createComment: createComment,
            readCommentById: readCommentById,
            updateComment: updateComment,
            deleteCommentById: deleteCommentById,
            readComments: readComments
        };
        return api;

        function createComment() {
        }

        function readCommentById() {
        }

        function updateComment() {
        }

        function deleteCommentById() {
        }

        function readComments(){
            return $http.get("/api/comment")
        }

    }
})();