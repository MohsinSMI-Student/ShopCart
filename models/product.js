'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    prodname: DataTypes.STRING,
    prodDesc: DataTypes.STRING,
    prodNo: DataTypes.INTEGER,
    prodQuantity:DataTypes.INTEGER,
    prodCost:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Product.belongsTo(models.Category,{foreignKey:'catId'});
      }
    }
  });
  return Product;
};
