'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {     
      INTEGER,
      STRING,
      DATE,} = Sequelize;
    await queryInterface.createTable('catalog', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING,
        validate: {
          min: 2,
          max: 50,
        },
      },
      created_at: DATE,
      updated_at: DATE,
    });
    

  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

   await queryInterface.dropTable('catalog');

  }
};
