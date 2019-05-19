'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {     
      INTEGER,
      STRING,
      DATE,} = Sequelize;
    await queryInterface.createTable('user', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: STRING,
      },
      password: {
        type: STRING,
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

   await queryInterface.dropTable('user');

  }
};
