var mongoose = require("mongoose");

module.exports = function(app,commentModel){

    app.get("/api/comment",findComments);
    app.post("/api/comment",createComment);
    app.delete("/api/comment/:id",deleteCommentById);
    app.get("/api/comment/picture/:id",findCommentsByPictureId);



    function findComments(req,res){
        commentModel.findComments()
            .then(
                function(comments){
                    res.json(comments)
                },
                function(err){
                    res.status(400).send(err)
                }
            )
    }

    function findCommentsByPictureId(req,res){
        var pictureId = req.params["id"];

        commentModel.findCommentByPictureId(pictureId)
            .then(
                function(comments){
                    res.json(comments)
                },
            function(err) {
                res.status(400).send(err);

            });
    }

    function createComment(req,res){
        var comment = req.body;

        return commentModel.createComment(comment)
            .then(
                function(response){
                    return commentModel.findComments()
                }
            )
            .then(
                function(comments){
                    res.json(comments)
                }
            )

    }

    function deleteCommentById(req,res){
        var id = req.params["id"];

        return commentModel.deleteCommentById(id)
            .then(
                function(response){
                    return commentModel.findComments()
                }
            )
            .then(
                function(comments){
                    res.json(comments)
                }
            )
    }

};