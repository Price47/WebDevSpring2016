var mongoose = require("mongoose");

module.exports = function(){

    var CommentSchema = require("./comment.schema.server.js")(mongoose);
    var CommentModel = mongoose.model('Comment',CommentSchema);

    var api = {

        findCommentById:findCommentById,
        findCommentByPictureId:findCommentByPictureId,
        findAllCommentsByUser: findAllCommentsByUser,
        deleteComment: deleteComment,
        createComment: createComment,
        updateComment: updateComment,
        findComments: findComments,
        findCommentsByPicture:findCommentsByPicture,
        deleteCommentById: deleteCommentById
    };return api;

    function findComments(){
        return CommentModel.find();
    }

    function findCommentsByPicture(id){
        return CommentModel.find({pictureId:id})
    }

    function findCommentById(id){
        return CommentModel.findById(id)
    }
    function findCommentByPictureId(pictureId){
        return CommentModel.find({pictureId:pictureId})
    }
    function findAllCommentsByUser(user){
        return CommentModel.find({username:user.username});
    }
    function updateComment(id,message){
        return CommentModel.update({_id:id},{$set:message})
    }
    function deleteComment(id){
        return CommentModel.remove({_id:id})
    }

    function createComment(comment){
        return CommentModel.create(comment)
    }

    function deleteCommentById(id){
        return CommentModel.remove({_id:id})
    }


};