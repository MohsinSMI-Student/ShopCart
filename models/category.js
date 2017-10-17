'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    catname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //Category.hasMany(models.Product,{foreignKey:'prodId'});
      }
    }
  });
  return Category;
};
