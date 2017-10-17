'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //User.hasMany(models.Order,{foreignKey:'orderId'});
  //      models.User.belongsTo(models.Role);
      }
    }
  });
  return User;
};
