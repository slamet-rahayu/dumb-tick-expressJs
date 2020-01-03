'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username:DataTypes.STRING,
    dateOfBirth:DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.event, {
      foreignKey: 'createdBy'
    })
    users.hasMany(models.favourites, {
      foreignKey: 'user_id'
    })
    users.hasMany(models.payment, {
      foreignKey: 'orderBy'
    })
  };
  return users;
};