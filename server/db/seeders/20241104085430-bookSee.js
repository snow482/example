const bcrypt = require("bcrypt");
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Дюна",
          pages: 800,
          author: "Фрэнк",
          category_id: 1,
          user_id: 1,
        },
        {
          title: "Lord of the rings",
          pages: 666,
          author: "Толкиен",
          category_id: 1,
          user_id: 1,
        },
        {
          title: "Автобиография",
          pages: 999,
          author: "Полина",
          category_id: 2,
          user_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
