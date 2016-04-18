/**
 * Created by rockstar645 on 4/16/16.
 */
var express= require("express");
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/project');



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(__dirname + '/public'));

var userSchema= new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    role: {type: String, default:"Enthusiast"}
}, {collection: "users"});

var currentUserSchema= new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    role: String
}, {collection: "currentUser"});

var User = mongoose.model("users",userSchema);
var CurrentUser = mongoose.model("currentUser",currentUserSchema);


User.create({username:"alice",password:"alice",firstName:"alice",lastName:"liddell",role:"admin"});
User.create({username:"bob",password:"bob",firstName:"bob",lastName:"barker"});

//set current user to 'user'//
function replaceCurrentUser(user,callback){
    CurrentUser.remove({});
    CurrentUser.create(user,callback)
}


function findAll(callback){
    User.find(callback)
}

function findCurrent(callback){
    CurrentUser.find(callback)
}

function findUserById(id,callback){
    User.find({_id:id},callback)
}

app.get("/rest/user",function(req,res){
    findAll(function(err,results){
        res.json(results)
    })
});

app.get("/rest/user/current",function(req,res){
        findCurrent(function(err,results){
            res.json(results);
        })
});

app.get("/rest/user/:username/:password",function(req,res){
    User.find({username:req.params["username"],password:req.params["password"]},
    function(err,results){
        console.log("USER LOGIN RESULTS: " + results);
        res.json(results);
    })
});


app.get("/rest/user/:id",function(req,res){
    findUserById(req.params["id"],function(err,results){
        res.json(results)
    })
});

app.post("/rest/user",function(req,res){
    var user = req.body;
    User.create(user, function (err, results) {
        User.find(function (err, results) {
            res.json(results)
        });
    })
});

app.post("/rest/user/current",function(req,res){
    var user = req.body;
    console.log(user);

    replaceCurrentUser(user,function(err,results){
        res.json(results);
    })
});


app.delete("/rest/user/:id",function(req,res){
    var id = req.params["id"];
    User.remove({_id: id},function(err,results){
        User.find(function(err,results){
            res.json(results);
        })
    })
});

app.delete("/rest/user/current",function(req,res){
    CurrentUser.remove({},function(err,results){
        console.log(results);
        res.json(results);
    })
});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port,ipaddress);