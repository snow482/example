import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Book, BookList } from "@/entities/book/model";

export class BookService {
  static async createBook(
    title: string,
    author: string,
    pages: number,
    category_id: number
  ): Promise<Book> {
    try {
      const response = await axiosInstance.post("/books", {
        title,
        author,
        pages,
        category_id,
      });
      return response.data.book;
    } catch (error) {
      console.error("Error create book:", error);
      throw new Error("Failed to create book");
    }
  }

  static async getAllBooks(): Promise<BookList> {
    try {
      const response = await axiosInstance.get("/books");
      return response.data.books;
    } catch (error) {
      console.error("Error fetching all books:", error);
      throw new Error("Failed to fetch books");
    }
  }

  static async updateBook(
    id: number,
    title: string,
    author: string,
    pages: number,
    category_id: number,
  ): Promise<Book> {
    try {
      const response = await axiosInstance.put(`/books/${id}`, {
        title,
        author,
        pages,
        category_id,
      });
      return response.data.book;
    } catch (error) {
      console.error("Error updating book:", error);
      throw new Error("Failed to update book");
    }
  }

  static async deleteBook(id: number): Promise<number> {
    try {
      await axiosInstance.delete(`/books/${id}`);
      return id
    } catch (error) {
      console.error("Error deleting book:", error);
      throw new Error("Failed to delete book");
    }
  }
}
