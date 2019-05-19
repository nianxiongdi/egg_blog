'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {     
      INTEGER,
      STRING,
      DATE,} = Sequelize;
    await queryInterface.createTable('collect', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      author: STRING,
      date: STRING,
      link: STRING,
      title: STRING,
      created_at: DATE,
      updated_at: DATE,
    });
    

  },

  down: async (queryInterface, Sequelize) => {
 
   await queryInterface.dropTable('collect');

  }
};
