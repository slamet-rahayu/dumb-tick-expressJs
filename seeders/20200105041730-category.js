'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('category', [{
        name: 'Sport',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Music',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Science',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Programming',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
