var db=require('../models/index');
var usr={};

usr.AdminCreate=function (req,res,next) {
    db.User.find({ //admin will be create only in the being
      where:{     //rest of time it will generate found key
        "email":"admin@mail.com",
        "password":"admin123"
      }
    }).then(function(ans){
      if(ans){
        res.json({
          'status':'already exist'
        });
      }else{
        db.User.create({"email":"admin@mail.com",
                        "password":"admin123"}).then(function (responce) {
            res.send(responce);
        }).catch(function (err) {
            res.send(err);
        })
      }
    })
}
usr.SignUp=function (req,res,next) { //Users are requested to sign up for first time
  if(req.body.email!= null && req.body.pass != null){ // it consider users and supplier
    db.User.create({"fName":req.body.name,"lName":req.body.lastname,
                    "userName":req.body.username,"email":req.body.email,
                    "password":req.body.pass}).then(function (responce) {
/*
                      db.Role.find({where:{name:'User'}}).then(function(r){
                          responce.setRole(r);
                          res.send(responce);
                      });
                      */

      res.send(responce);
    }).catch(function (err) {
        res.send(err);
    })
  }else{
    res.console.error(err);
  }
}

usr.Login=function(req,res,next){

  db.User.find({ // for login it will only SearchUser that is it exist?
    where:{
      "email":req.body.email,
      "password":req.body.pass
    }
}
    ).then(function(response){
    if (response!=null){
      helper.encrypt(JSON.stringify(
        {
          "email":req.body.email,
          "password":req.body.pass
        }
      )).then((crypted)=>{
        res.status(200).json({token: crypted});
      })
       res.json({
         "status":"found",
         'data' : response
       });

    }
    else {
       res.json({
         "status":"not found"
       });
      console.log("Fail")
    }
  });
}
module.exports=usr;
