var db=require('../models/index');
var finduser={};
var requestHelper = require("../helpers/helpers/request");
var responseHelper = require("../helpers/helpers/response");
var Sequelize = require('sequelize');


var sequelize = new Sequelize('database', 'root', '');


finduser.Find=function (req,res,next) {
//find the user with email address and with password
    db.User.find({
           where:{
             "email":req.body.email,
             "password":req.body.pass
           }
       }).then(function(responces){
         res.send(responces);
       });

}
finduser.SearchAll=function (req,res,next) {
//find the user with email address and with password
    db.User.findAll({
      where:{
        not:{"email":'admin@mail.com'}

      }
    }).then(function(responces){
         res.send(responces);
       });



}
module.exports=finduser;
