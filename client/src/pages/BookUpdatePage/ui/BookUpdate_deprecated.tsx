import { useBook } from "@/shared/hooks/useBook";
import { BookService } from "@/entities/book";
import { Book } from "@/entities/book";
import { BOOK_ACTION_TYPE } from "@/app/providers/BookContext";
import React, { useState } from "react";
import './BookUpdate.css'


export function BookUpdate({ book }: { book: Book}) {
  const { dispatch } = useBook();

  const [title, setTitle] = useState<string>(book.title);
  const [author, setAuthor] = useState<string>(book.author);
  const [pages, setPages] = useState<number>(book.pages);
  const [category_id, setCategoryId] = useState<number>(book.category_id);

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await BookService.updateBook(book.id, title, author, pages, category_id );
      dispatch({ type: BOOK_ACTION_TYPE.UPDATE_BOOK, payload: response });
      
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <section>
      <div className="book-update-item">
        <form onSubmit={handleUpdate}>
        <p>Название: </p>
        <input type="text" onChange={({ target }) => setTitle(target.value)} defaultValue={title} required placeholder="Book title" />
          <p>Автор: </p>
          <input type="text" onChange={({ target }) => setAuthor(target.value)} defaultValue={author} required placeholder="Book author" />
          <p>Количество страниц: </p>
          <input type="number" onChange={({ target }) => setPages(Number(target.value))} defaultValue={pages} required placeholder="Pages" />
          <p>Категория: </p>
          <input type="text" onChange={({ target }) => setCategoryId(Number(target.value))} defaultValue={category_id} required placeholder="Category" />
          <button>Update book</button>
        </form>
      </div>
    </section>
  );
}
