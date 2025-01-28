import { BookItem } from "@/entities/book";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { getAllBooks } from "@/entities/book/model/bookThunk";
import "./Book.css"


export function BookList() {
  const dispatch = useAppDispatch()
  const { books } = useAppSelector((state) => state.books)

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <>
      <div className="books">
      {books.length > 0 ? (
       books.map((book) => {
          const objBook = {
            id: book.id,
            title: book.title,
            author: book.author,
            pages: book.pages,
            category_id: book.category_id,
            user_id: book.user_id,
          };

          return <BookItem key={book.id} book={objBook} />;
        })
      ) : (
        <h2>No data</h2>
      )}
      </div>
    </>
  );
}
