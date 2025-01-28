const { Book, Category } = require("../db/models");
const { Op } = require("sequelize");

class BookService {
  static async getAllBooks() {
    try {
      const books = await Book.findAll({
        order: [["id", "ASC"]],
        include: Category,
      });

      return books;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOneBook(id) {
    try {
      const book = await Book.findOne({
        where: {
          id,
        },
        include: Category,
      });
      return book;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createBook(data) {
    try {
      const book = await Book.create(data);
      const newBook = await Book.findOne({
        where: { id: book.id },
        include: Category,
      });
      return newBook;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async deleteBook(id, authUserId) {
    try {
      const countDeletedBooks = await Book.destroy({
        where: { id, user_id: authUserId },
      });
      return countDeletedBooks;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateBook(data, id, user_id) {
    try {
      const [countUpdated] = await Book.update(data, { where: { id, user_id } });

      return countUpdated;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  // name = тол
  // Поиск по имени
  // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
  static async findAllBooksByName(name) {
    try {
      const book = await Book.findAll({
        where: {
          [Op.substring]: name,
        },
        include: Category,
      });
      return book;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = BookService;
