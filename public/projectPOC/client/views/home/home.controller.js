/**
 * Created by rockstar645 on 3/8/16.
 */
(function() {

        angular
            .module("ProjectApp")
            .controller("HomeController", HomeController);


        function HomeController($location, $scope, $rootScope, $http, PhotoService, UserService) {

            $scope.detailView = detailView;

            function init() {
                PhotoService.readPhotos()
                    .then(handleSuccess, handleError);

            }
            init();

            function handleSuccess(response){
                $scope.photos = response.data;
            }

            function handleError(err){
                $scope.error = err;
            }

            function detailView(index){
                $rootScope.photoIndex = index;
                $location.url("/detail")
            }
        }
    }

)();