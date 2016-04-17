/**
 * Created by rockstar645 on 4/13/16.
 */
var express= require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost');


var userShcema= new mongoose.Schema({
    username: String,
    password: Number,
    color: {type:String, default:"Orange"}
}, {collection: "users"});

var user = mongoose.model("user",userShcema);


function createUser(u){
    user.create(u, function(err,results){
        console.log(err);
        console.log(results);
    })
}

function renderUsers(err, resultSet){
    for(var r in resultSet){
        var name = resultSet[r].username;
        var pass = resultSet[r].password;
        console.log([name, pass]);
    }
}

function findAll(callback){
    user.find(callback)
}
function findByName(name,callback){
    user.find({username:name},callback);
}

//findAll(renderUsers);
//findByName("bill", renderUsers);

app.get('/rest/user',function(req,res){
    findAll(function(err,results){
        res.json(results)
    })
});

app.listen("4747");