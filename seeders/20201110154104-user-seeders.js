'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('users', [
    {
      name: "alif",
      profession: "Admin Micro",
      role: "admin",
      email: "alifsafrudin94@gmail.com",
      password: await bcrypt.hash('rahasia', 10),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: "hasnia",
      profession: "Front End Developer",
      role: "student",
      email: "hasnia.fauziyah94@gmail.com",
      password: await bcrypt.hash('rahasiajuga', 10),
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
