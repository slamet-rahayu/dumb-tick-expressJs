'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourites = sequelize.define('favourites', {
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  favourites.associate = function(models) {
    // associations can be defined here
    favourites.belongsTo(models.users, {
      foreignKey: 'user_id'
    })
    favourites.belongsTo(models.event, {
      foreignKey: 'event_id'
    })
  };
  return favourites;
};