import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { updateBook } from "@/entities/book/model/bookThunk";
import "./BookUpdate.css";


export function BookUpdate() { 
  const dispatch = useAppDispatch()
  const { books } = useAppSelector((state) => state.books)
  const { id } = useParams()
  const navigate = useNavigate()

  const book = books.find((el) => el.id === Number(id))

  const [title, setTitle] = useState<string>(book?.title || '');
  const [author, setAuthor] = useState<string>(book?.author || '');
  const [pages, setPages] = useState<number>(book?.pages || 0);
  const [category_id, setCategoryId] = useState<number>(book?.category_id || 0);

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!book) {
        return
      }
    
      dispatch(updateBook({id: Number(id), title, author, pages, category_id}));
      navigate('/books')
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <section>
      <div className="book-update-item">
        <form onSubmit={handleUpdate}>
          <p>Название: </p>
          <input
            type="text"
            onChange={({ target }) => setTitle(target.value)}
            defaultValue={title}
            required
            placeholder="Book title"
          />
          <p>Автор: </p>
          <input
            type="text"
            onChange={({ target }) => setAuthor(target.value)}
            defaultValue={author}
            required
            placeholder="Book author"
          />
          <p>Количество страниц: </p>
          <input
            type="number"
            onChange={({ target }) => setPages(Number(target.value))}
            defaultValue={pages}
            required
            placeholder="Pages"
          />
          <p>Категория: </p>
          <input
            type="text"
            onChange={({ target }) => setCategoryId(Number(target.value))}
            defaultValue={category_id}
            required
            placeholder="Category"
          />
          <button>Update book</button>
        </form>
      </div>
    </section>
  );
}
