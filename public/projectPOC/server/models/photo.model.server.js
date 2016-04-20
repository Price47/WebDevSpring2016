var mongoose = require("mongoose");

module.exports = function() {

    var PhotoSchema = require("./photo.schema.server.js")(mongoose);
    var PhotoModel = mongoose.model('Photo', PhotoSchema);

    PhotoModel.create({picture:"http://indianapublicmedia.org/support/files/2011/09/04_03_1-Stock-Market-Prices_web.jpg"});
    PhotoModel.create({picture:"https://bootstrapbay.com/blog/wp-content/uploads/2014/05/stocksnap-free-stock-photos1.jpg"});
    PhotoModel.create({picture:"http://static.bigstockphoto.com/images/homepage/2016_bigstock_picks.jpg"});
    PhotoModel.create({picture:"http://static2.businessinsider.com/image/5238847e69bedd2209d2823d/the-entire-state-of-the-us-economy-the-fed-and-the-stock-market-in-one-disturbing-paragraph.jpg"});
    PhotoModel.create({picture:"http://budgetstockphoto.com/bamers/stock_photo_spectrum.jpg"});
    PhotoModel.create({picture:"http://bluehorseshoestocks.com/wp-content/uploads/2013/03/Traders-Psychology-a.jpg"});

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