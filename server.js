var express = require("express");
var mysql = require("mysql");
var jwt = require("jwt-simple");
var bodyparser = require("body-parser");
var fs = require("fs");


var app = express();


app.use(express.static(__dirname+"/../web page"));

app.use(bodyparser.json());


var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"poc"
});


connection.connect();


var tokens=[];

app.post("/login",function (req,res) {
    var uname = req.body.uname;
    var upwd  = req.body.upwd;
    connection.query("select uname from login_details where uname='"+uname+"'",function (err,recordsArray,fields) {
        if(recordsArray.length>0){
            var token = jwt.encode({'uname':uname},'hr@nareshit.in');
            tokens.push(token);
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'fail'});
        }
    })
});


app.post("/static",function (req,res) {
   if( req.body.token == tokens[0]) {
       fs.readFile(__dirname+"/static.json",function (err,data) {
           res.send(data);
       });
   }else{
       res.send({"401":"UnAuthorized User"});
   };
});


app.post("/mysql",function (req,res) {
    if( req.body.token == tokens[0]) {
        connection.query("select * from products",function (err,recordsArray,fields) {
            res.send(recordsArray);
        });
    }else{
        res.send({"401":"UnAuthorized User"});
    };
});




app.listen(8080);
console.log("Server Listening the Port No.8080");

