var db=require('../models/index');
var findcat={};
var bodyParser = require('body-parser');
var requestHelper = require("../helpers/helpers/request");
var responseHelper = require("../helpers/helpers/response");
var Sequelize = require('sequelize');


var sequelize = new Sequelize('database', 'root', '');


findcat.Find=function (req,res,next) {
  //SearchCategory by catID
  var reqBody = requestHelper.parseBody(req.body);
  var search = reqBody['catId'];
  db.Product.findAll({
         where:{
           catId:search
         }
     }).then(function(responces){
        res.json({
          'data':responces

        });
       res.send(responces);
     });

}

findcat.SearchAllCategory=function (req,res,next) {
  //SearchCategory by catID
  db.Product.findAll({
     }).then(function(responces){
        res.json({
          'data':responces

        });
       res.send(responces);
     });

}

module.exports=findcat;
