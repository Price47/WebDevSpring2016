var mongoose = require("mongoose");

module.exports = function(){

    var CommentSchema = require("./comment.schema.server.js")(mongoose);
    var CommentModel = mongoose.model('Comment',CommentSchema);

    var api = {

        findCommentById:findCommentById,
        findAllCommentsByUser: findAllCommentsByUser,
        deleteComment: deleteComment,
        createComment: createComment,
        updateComment: updateComment,
        findComments: findComments
    };return api;

    function findComments(){
        return CommentModel.find();
    }

    function findCommentById(id){
        return CommentModel.findById(id)
    }
    function findAllCommentsByUser(user){
        return CommentModel.find({username:user.username});
    }
    function updateComment(id,comment){
        return CommentModel.update({_id:id},{$set:comment})
    }
    function deleteComment(id){
        return CommentModel.remove({_id:id})
    }

    function createComment(comment){
        return CommentModel.create(comment)
    }


};