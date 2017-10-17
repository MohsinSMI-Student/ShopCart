var express = require('express');
var router = express.Router();
var Category=require('../Controller/Category');
var SearchCategory=require('../Controller/collectCat');
var SearchUser=require('../Controller/collectUser');
var Order=require('../Controller/Order');
var Product=require('../Controller/Product');
var User=require('../Controller/User');
router.post("/CatCreate",Category.Make);// localhost:3000/Category/CatCreate
router.post("/CatUpdate",Category.update);// localhost:3000/Category/CatUpdate
router.post("/CatDelete",Category.delete);// localhost:3000/Category/CatDelete
router.post("/OrdCreate",Order.Make);// localhost:3000/Order/OrdCreate
router.post("/OrdFind",Order.Find);// localhost:3000/Order/OrdFind
router.post("/OrdUpdate",Order.update);// localhost:3000/Order/OrdUpdate
router.post("/OrdSearchAll",Order.SearchAll);// localhost:3000/Order/OrdSearchAll
router.post("/OrdDelete",Order.delete);// localhost:3000/Order/OrdDelete
router.post("/ProCreate",Product.Make);// localhost:3000/Product/ProCreate
router.post("/ProUpdate",Product.update);// localhost:3000/Product/ProUpdate
router.post("/ProDelete",Product.delete);// localhost:3000/Product/ProDelete
router.post("/ProSearchForAll",Product.SearchAll);// localhost:3000/Product/ProSearchForAll
router.post("/ProFind",Product.Find);// localhost:3000/Product/ProFind
router.post("/SignUp",User.SignUp);// localhost:3000/User/SignUp
router.post("/Login",User.Login);// localhost:3000/User/Login
router.post("/SearchCategory",SearchCategory.Find);// localhost:3000/Category/SearchCategory
router.get("/AdminCreate",User.AdminCreate);// localhost:3000/User/AdminCreate
router.get("/SearchUser",SearchUser.Find);// localhost:3000/USer/SearchUser
router.get("/SearchForAll",SearchUser.SearchAll);// localhost:3000/USer/SearchForAll
router.get("/SearchAllProduct",Product.SearchForAll);// localhost:3000/Product/SearchAllProduct
router.get("/SearchForAllCategory",SearchCategory.SearchAllCategory);// localhost:3000/Category/SearchForAllCategory

module.exports=router;
