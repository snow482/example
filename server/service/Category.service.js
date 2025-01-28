const { Category } = require("../db/models");

class CategoryService {
  static async getAllCategory() {
    try {
      const categories = await Category.findAll({
        order: [["id", "ASC"]],
      });

      return categories;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOneCategory(id) {
    try {
      const category = await Category.findByPk(id);
      return category;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createCategory(data) {
    try {
      const category = await Category.create(data);
      return category;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async deleteCategory(id) {
    try {
      const countDeletedCategories = await Category.destroy({
        where: { id },
      });
      return countDeletedCategories;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateCategory(data, id) {
    try {
      const [countUpdated] = await Category.update(data, { where: { id } });
      return countUpdated;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = CategoryService;
