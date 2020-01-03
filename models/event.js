'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    price: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    urlMaps: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    img: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {});
  event.associate = function(models) {
    // associations can be defined here
    event.belongsTo(models.category, {
      foreignKey: 'category_id'
    })
    event.belongsTo(models.users, {
      foreignKey: 'createdBy'
    })
    event.hasMany(models.favourites, {
      foreignKey: 'event_id'
    })
    event.hasMany(models.payment, {
      foreignKey: 'event_id'
    })
  };
  return event;
};