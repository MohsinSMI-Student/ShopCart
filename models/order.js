'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    ordername: DataTypes.STRING,
    orderDesc: DataTypes.STRING,
    orderNo: DataTypes.INTEGER,
    orderCost:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        //order.belongsTo(models.user,{foreignKey:'userId'})
        Order.belongsTo(models.User,{foreignKey:'userId'});
        Order.hasMany(models.Product,{foreignKey:'catId'});
        //Order.hasMany(models.Category,{foreignKey:'catId'});
      }
    }
  });
  return Order;
};
