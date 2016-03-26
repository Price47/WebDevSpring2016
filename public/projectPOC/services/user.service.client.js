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
            getCurrentUser: getCurrentUser,
            fillInUser: fillInUser
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


        function createUser(user) {
            var newUser = {
                _id:  model.users[model.users.length-1]._id + 1,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password,
                role: user.role
            };
            console.log(newUser._id);
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

        function fillInUser(user,userInfo){
            if(!user.firstName){
                user.firstName = userInfo.firstName;
            }
            if(!user.lastName){
                user.lastName = userInfo.lastName;
            }
            if(!user.username){
                user.username=userInfo.username;
            }
            if(!user.password){
                user.password=userInfo.password;
            }
            if(!user.role){
                user.role=userInfo.role;
            }

            return user;

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
