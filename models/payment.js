'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    orderBy: DataTypes.STRING,
    event_id: DataTypes.STRING,
    status: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  payment.associate = function(models) {
    // associations can be defined here
    payment.belongsTo(models.event, {
      foreignKey: 'event_id'
    })
    payment.belongsTo(models.users, {
      foreignKey: 'orderBy'
    })
  };
  return payment;
};