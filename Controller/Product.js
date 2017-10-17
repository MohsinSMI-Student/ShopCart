var db=require('../models/index');
var pro={};
var requestHelper = require("../helpers/helpers/request");
var responseHelper = require("../helpers/helpers/response");
var Sequelize = require('sequelize');


var sequelize = new Sequelize('database', 'root', '');


pro.SearchAll=function (req,res,next) {
  //catID will search all the data related to CatID from the product table
  //CatId is foreignKey in product table
  var reqBody = requestHelper.parseBody(req.body);
  var search = reqBody['catId'];
  db.Product.findAll({
         where:{
           'catId':search
         }
     }).then(function(responces){
        res.json({
          'data':responces

        });
       res.send(responces);
     });



}

pro.SearchForAll=function (req,res,next) {
    db.Product.findAll({     }).then(function(responces){
        res.json({
          'data':responces

        });
       res.send(responces);
     });
}

pro.Find=function (req,res,next) {
  //will search all the product by their name.
    var reqBody = requestHelper.parseBody(req.body);
    var search = reqBody['name'];
    db.Product.find({
           where:{
             'prodname':search
           }
       }).then(function(responces){
          res.json({
            'data':responces
          });
         res.send(responces);
       });
}


pro.Make=function (req,res,next) {
//create the product in Products table
    db.Product.create({"prodname":req.body.name,"prodDesc":req.body.desc,
                    "prodNo":req.body.no,"prodQuantity":req.body.quant,
                    "prodCost":req.body.cst,"catId":req.body.catId}).then(function (responce) {
        res.send(responce);
    }).catch(function (err) {
        res.send(err);
    })
}

pro.update=function (req,res,next) {
  //read it then write it by the help of prodname
    db.Product.find({
      where:{
        'prodname':req.body.name,
        'prodNo':req.body.no
      }
    }).then(function(ans){
      if(ans){
        ans.updateAttributes({
          //editing will be done with the help of prodname quantity and their cost
          'prodname' : req.body.UpdatedName,
          "prodQuantity":req.body.UpdatedQuant,
          "prodCost":req.body.UpdatedCst
        }).then(function(ans2){
          if(ans2){
            res.json({
              'status' :'Success',
               'data' : ans2
            });
          }else{
            res.json({
              'status' :'Fail'
            });
          }
        })
      }
      else{
        res.json({
          'status' :'Fail'
        });
      }
    });
}
pro.delete = function(req,res,next){
  db.Product.find({ //find it and delete it not findall, only desire data
    where:{
      'prodname': req.body.name,
      'prodno': req.body.no
    }
  }).then(function(ans){
      if(ans){
        ans.destroy().then(function(ans2){
            if(ans2){
              res.json({
                'status': 'success',
                'data': ans2
              });
            }else{
              res.json({
                'status': 'fail',
              });
            }
        });
      }
      else{
        res.json({
          'status': 'fail',
        });
      }
  });
}


module.exports=pro;
