/**
 * Created by rockstar645 on 2/29/16.
 */
(function(){
    angular
        .module("ProjectApp")
        .factory("UserService",UserService);

    function UserService($rootScope) {
        var model = {
            users: [
                {
                    "_id": 111, "firstName": "Price", "lastName": "Stoeffel",
                    "username": "price", "password": "price", role: "admin"
                }
            ],

            findUserByCredentials: findUserByCredentials,
            findUserByUsername: findUserByUsername,
            findAllUsers: findAllUsers,
            createUser: createUser,
            findUserById: findUserById,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };
        return model;

        function setCurrentUser(user){
            $rootScope.currentUser = user;
        }

        function getCurrentUser(){
            return $rootScope.currentUser;
        }

        function findUserByCredentials(user) {
            for (var varUser in model.users) {
                if (model.users[varUser].username === user.username &&
                    model.users[varUser].password === user.password) {
                    console.log(model.users[varUser]);
                    return model.users[varUser];

                }
            }
            return null;
        }

        function findUserByUsername(username){
            for(var u in model.users){
                if(model.users[u].username=username)
                    return model.users[u];
            }
        }

        function findUserById(userId) {
            for (var varUser in model.users) {
                if (model.users[varUser]._id === userId){
                    return model.users[varUser];
                }
            }
            return null;
        }

        function findAllUsers(callback) {
            if(model.users != null){
                return model.users;
            }
            else{
                return null;
            }
        }

        function createId(){
            var i = 1;
            var newId = null;
            while (newId = null) {
                var id = UserService.findUserById(i);
                if (id = null) {
                    newId = i;
                    return newId;
                }
                else {
                    i++;
                }
            }
        }

        function createUser(user) {
            var newUser = {
                _id: createId(),
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password,
                role: user.role
            };
            model.users.push(newUser);
            return user;
        }

        function deleteUserById(user){
            for (var varUser in model.users){
                if(model.users[varUser].username === user.username &&
                    model.users[varUser].id===user.id){
                    model.users.splice(varUser, 1)
                }
            }
        }

        function updateUser(userId,currentUser) {
            var user = findUserById(userId);
            if (user != null) {
                if(currentUser.firstName!=null){
                    user.firstName = currentUser.firstName;
                }
                if(currentUser.lastName!=null){
                    user.lastName = currentUser.lastName;
                }
                if(currentUser.username!=null){
                    user.username = currentUser.username;
                }
                if(currentUser.password!=null){
                    user.password = currentUser.password;
                }
                if(currentUser.roles!=null){
                    user.roles = currentUser.roles;
                }
                return user;
            }
            else {
                return null;
            }


        }
    }



})();
