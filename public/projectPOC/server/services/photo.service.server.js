var mongoose = require('mongoose');
var multiparty = require('multiparty')

module.exports = function(app,photoModel) {

    app.get("/api/photo",readPhotos);
    app.delete("/api/photo/:id",deletePhotoById);
    app.get("/api/photo/:id",readPhotosByUser);
    app.post("/api/photo",createPhoto);
    app.post("/api/photo/upload",uploadPhoto);
    app.post("/api/photo/:userId/:photoId",addUser);
    app.post("/api/photo/upload/image");
    app.get("/api/photo/owner/:id",readUserPhotos);

    function readPhotos(req,res){
        photoModel.readPhotos()
            .then(
                function(photos){
                    res.json(photos)
                },
                function(err){
                    res.status(400).send(err);
                }

            )
    }

    function readUserPhotos(req,res){
        var id = req.params["id"];

        photoModel.readUserPhotos(id)
            .then(
                function(photos){
                    res.json(photos)
                },
                function(err){
                    res.status(400).send(err)
                }
            )


    }

    function uploadPhoto(req,res){
        var photo = req.body;

        photoModel.createPhoto(photo)
            .then(
                function(response){

                },
                function(err){
                    res.status(400).send(err)
                }
            )
    }

    function addUser(req,res){
        var userId = req.params["userId"];
        var photoId = req.params["photoId"];

        return photoModel.addUser(userId,photoId)
            .then(
                function(response){
                }
            )
    }


    function deletePhotoById(req,res){
        var id = req.params["id"];

        return photoModel.deletePhotoById(id)
            .then(
                function(response){
                    return photoModel.readPhotos()
                }
            )
            .then(
                function(photos){
                    res.json(photos)
                }
            )
    }
    function createPhoto(req,res){
        var photo = req.body

    }

    function readPhotosByUser(req,res){
        var id = req.params["id"];

        return photoModel.readPhotosByUser(id)
            .then(
                function(photos){
                    res.json(photos)
                },
                function(err){
                    res.status(400).send(err)
                }
            )


    }





};