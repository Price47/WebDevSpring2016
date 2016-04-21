var mongoose = require('mongoose');

module.exports = function(app,photoModel) {

    app.get("/api/photo",readPhotos);
    app.delete("/api/photo/:id",deletePhotoById);
    app.get("/api/photo/:id",readPhotosByUser);
    app.post("/api/photo",createPhoto);
    app.post("/upload",upload);
    app.get("/file/:id",fileRead);
    app.post("/api/photo/:userId/:photoId",addUser);

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
                    return photoModel.readPhotos
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


    }

    function upload(req,res){
        var dirname = require('path').dirname(__dirname);
        var filename = req.files.file.name;
        var path = req.files.file.path;
        var type = req.files.file.mimetype;

        var read_stream =  fs.createReadStream(dirname + '/' + path);

        var conn = req.conn;
        var Grid = require('gridfs-stream');
        Grid.mongo = mongoose.mongo;

        var gfs = Grid(conn.db);

        var writestream = gfs.createWriteStream({
            filename: filename
        });
        read_stream.pipe(writestream);

    };

    function fileRead(req,res){
        var pic_id = req.param('id');
        var gfs = req.gfs;

        gfs.files.find({filename: pic_id}).toArray(function (err, files) {

            if (err) {
                res.json(err);
            }
            if (files.length > 0) {
                var mime = 'image/jpeg';
                res.set('Content-Type', mime);
                var read_stream = gfs.createReadStream({filename: pic_id});
                read_stream.pipe(res);
            } else {
                res.json('File Not Found');
            }
        });
    };


};