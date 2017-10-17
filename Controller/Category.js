var db=require('../models/index');
var cat={};

cat.Make=function (req,res,next) {
//Create the Category with the catname
    db.Category.create({'catname':req.body.name}).then(function (responce) {
        res.send(responce);
    }).catch(function (err) {
        res.send(err);
    })

}
cat.update=function (req,res,next) {
  //Find the catname read it
db.Category.find({
  where:{
    'catname':req.body.name
  }
}).then(function(ans){
  if(ans){
    ans.updateAttributes({
      //after reading it will edit the catname
      'catname':req.body.UpdatedName
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
cat.delete = function(req,res,next){
  //first read the catname then delete it.
  db.Category.find({
    where:{
      'catname':req.body.name
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
module.exports=cat;
