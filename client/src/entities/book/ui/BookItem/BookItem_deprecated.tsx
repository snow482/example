import { Book } from "../../model";
import { BookUpdate } from "@/pages";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { deleteBook } from "../../model/bookThunk";
import { useParams } from "react-router-dom";
import './Book.css'


export function BookItem({ book }: { book: Book }) {
  const [show, setShow] = useState<boolean>(false)

  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  
  const handleDelete = async () => {
    try {
      dispatch(deleteBook(Number(id)));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  
  return (
    <section>
        <div className="book-item">
          <h2>{book.title}</h2>
          <p>Автор: {book.author}</p>
          {user?.id === book.user_id ? (
            <button onClick={handleDelete}>Delete book</button>
          ) : null}
          {user?.id === book.user_id ? (
            <>
              <button onClick={()=> setShow((prev) => !prev)}>Update</button>
              {show && <BookUpdate key={book.id} />}
            </>
          ) : null}
        </div>
    </section>
  );
}
