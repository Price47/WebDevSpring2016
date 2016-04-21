/**
 * Created by rockstar645 on 2/29/16.
 */
(function(){
    angular
        .module("ProjectApp")
        .factory("UserService",UserService);

    function UserService($rootScope, $http) {
        var api = {

            login: login,
            createUser: createUser,
            readUserById: readUserById,
            readUserByUsername: readUserByUsername,
            readUsers: readUsers,
            updateUser: updateUser,
            deleteUserById: deleteUserById,
            readFavoritePhotos: readFavoritePhotos,
            addFavoritePhoto:addFavoritePhoto
        };
        return api;

        function createUser(user){
            return $http.post("/api/user",user)
        }

        function readUsers(){
            return $http.get("/api/user")
        }

        function readUserByUsername(username){
            return $http.get("/api/user/" + username )
        }


        function login(username,password){
            return $http.post("/api/login/" + username + "/" + password )
        }
        function readUserById(id,callback){
            $http.get("/rest/user/" + id)
                .success(callback);
        }

        function updateUser(user){
            return $http.put("/api/user/" + user._id, user)
        }

        function deleteUserById(id){
            return $http.delete("/api/user/" + id)
        }

        function readFavoritePhotos(id){
            return $http.get("/api/user/" + id + "/favorite")
        }

        function addFavoritePhoto(id,photoId){
            return $http.post("/api/user/" + id + "/" + photoId)
        }


    }




})();
