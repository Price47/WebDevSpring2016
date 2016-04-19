(function() {
    angular
        .module("ProjectApp")
        .factory("PhotoService", PhotoService);

    function PhotoService($rootScope, $http) {
        var api = {

            createPhoto: createPhoto,
            readPhotos: readPhotos,
            readPhotoById: readPhotoById,
            readPhotosByUser: readPhotosByUser,
            deletePhotoById: deletePhotoById
        };
        return api;

        function createPhoto(photo){
            return $http.post("/api/photo");
        }

        function readPhotos(){
            return $http.get("/api/photo");
        }

        function readPhotoById(id){
            return $http.get("/api/photo/" + id)
        }

        function readPhotosByUser(userId){
            return $http.get("/api/photo/" + userId)
        }

        function deletePhotoById(id){
            $http.delete("/api/photo/" + id)
        }

    }

})();