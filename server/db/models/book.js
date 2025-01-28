"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.User, { foreignKey: "user_id" });
      Book.belongsTo(models.Category, { foreignKey: "category_id" });
    }
  }
  Book.init(
    {
      title: DataTypes.TEXT,
      author: DataTypes.TEXT,
      pages: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book", // Categories
      // tableName: "Categories"
    }
  );
  return Book;
};
