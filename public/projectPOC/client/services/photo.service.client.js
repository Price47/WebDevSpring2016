(function() {
    angular
        .module("ProjectApp")
        .factory("PhotoService", PhotoService);

    function PhotoService($rootScope, $http) {
        var api = {

            createPhoto: createPhoto,
            readPhotos: readPhotos,
            readPhotosByUser: readPhotosByUser,
            deletePhotoById: deletePhotoById,
            addUser:addUser,
            uploadPhoto:uploadPhoto

        };
        return api;

        function createPhoto(photo){
            return $http.post("/api/photo");
        }

        function readPhotos(){
            return $http.get("/api/photo");
        }

        function readPhotosByUser(userId){
            return $http.get("/api/photo/" + userId)
        }

        function deletePhotoById(id){
            $http.delete("/api/photo/" + id)
        }

        function addUser(id,photoId){
            return $http.post("/api/photo/" + id + "/" + photoId)
        }

        function uploadPhoto(photo){
            return $http.post("/api/photo/upload/",photo);
        }


    }

})();