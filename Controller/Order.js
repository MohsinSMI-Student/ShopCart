var db=require('../models/index');
var ord={};var requestHelper = require("../helpers/helpers/request");
var responseHelper = require("../helpers/helpers/response");
var Sequelize = require('sequelize');


var sequelize = new Sequelize('database', 'root', '');

ord.Make=function (req,res,next) {
// Create the Order
    db.Order.create({"ordername":req.body.name,"orderDesc":req.body.desc,
                    "orderNo":req.body.no,"orderCost":req.body.cost,
                    "userId":req.body.userId,"catId":req.body.catId}).then(function (responce) {
        res.send(responce);
    }).catch(function (err) {
        res.send(err); //Sent the Error
    })
}

ord.Find=function (req,res,next) {
  //Find the desire Order
  var reqBody = requestHelper.parseBody(req.body);
  var search = reqBody['orderNo']; //Searching perform by the orderNo
  db.Order.find({
         where:{
           orderNo:search
         }
     }).then(function(responces){
        res.json({
          'data':responces

        });
       res.send(responces);
     });
}

ord.SearchAll=function (req,res,next) {
  //By userId Order wil search for all data
  var reqBody = requestHelper.parseBody(req.body);
  var search = reqBody['userId'];
  db.Order.find({
         where:{
           userId:search
         }
     }).then(function(responces){
        res.json({
          'data':responces

        });
       res.send(responces);
     });
}

ord.update=function (req,res,next) {
  //first find the data means read the data
db.Order.find({
  where:{
    'orderNo':req.body.no,
    'userId':req.body.userId
  }
}).then(function(ans){
  if(ans){
    ans.updateAttributes({
      //edit the data it will update the desc of the order
      'orderDesc':req.body.UpdatedDesc
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
ord.delete = function(req,res,next){
  //orderNo will change searched and then delete it.
  db.Order.find({
    where:{
      'orderNo':req.body.no
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
module.exports=ord;
