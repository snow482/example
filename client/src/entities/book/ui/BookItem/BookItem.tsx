import { Book } from "../../model";
import { BookUpdate } from "@/pages";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { deleteBook } from "../../model/bookThunk";
import "./Book.css";


export function BookItem({ book }: { book: Book }) {
  const [show] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const handleDelete = async () => {
    try {
      console.log(book);
      dispatch(deleteBook(book.id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      {user?.id === book.user_id ? (
        <div className="card">
          <div className="link">
          <Link  to={`/books/${book.id}`}>
            <section>
              <div className="book-item">
              
                <h2>{book.title}</h2>
                <p>Автор: {book.author}</p>
                
                {user?.id === book.user_id ? (
                  <>
                    {show && <BookUpdate key={book.id} />} 
                  </>
                ) : null}
              </div>
            </section>
          </Link>
          </div>
          <div className="delete">
          {user?.id === book.user_id ? (<button  onClick={handleDelete}>Delete book</button>) : null}
          </div>
        </div>
      ) : (
        <section>
            <div className="book-item">
              <h2>{book.title}</h2>
              <p>Автор: {book.author}</p>
            </div>
          </section>
      )}
    </>
  );
}
