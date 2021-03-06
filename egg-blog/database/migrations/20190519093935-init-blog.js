'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, 
      STRING, 
      TEXT, 
      DATE,} = Sequelize;
    await queryInterface.createTable('blog', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: STRING,
        validate: {
          min: 2,
          max: 50,
        },
      },
      summary: {
        type: STRING,
        validate: {
          min: 2,
          max: 255,
        },
      },
      content: {
        type: TEXT,
      },
      readSize: {
        type: INTEGER,
        defaultValue: 0,
      },
      commentSize: {
        type: INTEGER,
        defaultValue: 0,
      },
      tags: {
        type: STRING(100),
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

   await queryInterface.dropTable('blog');

  }
 
};
