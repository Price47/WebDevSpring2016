var mongoose = require("mongoose");

module.exports = function() {

    var PhotoSchema = require("./photo.schema.server.js")(mongoose);
    var PhotoModel = mongoose.model('Photo', PhotoSchema);

    PhotoModel.create({picture:"picture1"});
    PhotoModel.create({picture:"picture2"});
    PhotoModel.create({picture:"picture3"});

    var api = {

        createPhoto: createPhoto,
        readPhotoById: readPhotoById,
        readPhotos: readPhotos,
        deletePhotoById: deletePhotoById

    };return api;

    function createPhoto(photo){
        return PhotoModel.create(photo);
    }
    function readPhotoById(id){
        return PhotoModel.find({_id:id})
    }
    function readPhotos(){
        return PhotoModel.find();
    }
    function deletePhotoById(id){
        return PhotoModel.remove({_id:id});
    }


};