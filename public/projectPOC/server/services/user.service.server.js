var mongoose = require('mongoose');

module.exports = function(app,userModel){



    app.post("/api/login", login);
    app.post("/api/login/:username/:password",loginByCredentials);
    app.get("loggedin",loggedIn);
    app.post("/api/logout",logout);
    app.post("/api/register",register);
    app.get("/api/user", findAllUsers);
    app.post("/api/user",createUser);
    app.delete("/api/user/:id",deleteUserById);
    app.put("/api/user/:id",updateUser);
    app.get("/api/user/:username",findUserByUsername);
    app.get("/api/user/:id/favorite",readFavoritePhotos);
    app.post("/api/user/:id/favorite",addFavoritePhoto);


    function readFavoritePhotos(req,res){
    }

    function addFavoritePhoto(req,res){
        var id = req.params["id"];
        var pictureId = req.params["photoId"];

        return userModel.addFavoritePhoto(id,pictureId)
            .then(
                function(response){
                    return userModel.findAllUsers()
                },
                function(err){
                    res.status(400).send(err);
                }
            )
    }

    function deleteUserById(req,res){
        var id = req.params["id"];

        return userModel.deleteUser(id)
            .then(
                function(response){
                    return userModel.findAllUsers()
                },
                function(err){
                    res.status(400).send(err)
                })
            .then(
                function(users){
                    res.json(users)
                })

        }

    function findUserByUsername(req,res){
        var username = req.params["username"];

        return userModel.findUserByUsername(username)
            .then(
                function(user){
                    res.json(user)
                },
                function(err){
                    res.status(400).send(err)
                }
            )
    }

    function createUser(req,res){
        var user = req.body;

        return userModel.createUser(user)
            .then(

                function(response){
                    return userModel.findAllUsers()
                }
            )
            .then(
                function(users){
                    res.json(users);
                })
    }

    function findAllUsers(req,res){
        userModel.findAllUsers()
            .then(
                function(users){
                    res.json(users);
                },
            function(){
                res.status(400).send(err)
            }
            )
    }

    function loggedIn(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function loginByCredentials(req,res){
        userModel.findUserByCredentials(req.params["username"],req.params["password"])
            .then(
                function(user){
                    res.json(user)
                }
            )
    }

    function register(req,res) {
        var user = req.body;
        userModel.findUserById(user._id)
            .then(
                function (user) {
                    if (user) {
                        res.json(null);
                    } else {
                        return userModel.createUser(user);
                    }
                },
                function (err) {
                    res.status(400).send(err)
                }
            )
    }

    function updateUser(req,res){
        var user = req.body;

        userModel.updateUser(user._id,user)
            .then(
                function(user){
                    return userModel.findAllUsers();
                },
                function(err){
                    res.status(400).send(err)
                }
            )
            .then(
                function(users){
                    res.json(users);
                }
            )
    }



};
