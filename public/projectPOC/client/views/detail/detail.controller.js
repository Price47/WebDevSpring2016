/**
 * Created by rockstar645 on 3/8/16.
 */
(function(){

    angular
        .module("ProjectApp")
        .controller("DetailController", DetailController);

    function DetailController($scope, $rootScope, $location, CommentService) {

        function init(){
            CommentService.readComments()
                .then(handleSuccess,handleError)
        }init();




        function handleSuccess(response){
            $scope.comments = response.data;
        }

        function handleError(err){
            $scope.error = err;
        }
    }
})();