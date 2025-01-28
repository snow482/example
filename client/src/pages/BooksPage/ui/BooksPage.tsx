import BookForm from "@/widgets/BookForm";
import BookList from "@/widgets/BookList";

export function BooksPage() {
  return (
    <>
      <h1>Books page</h1>
      <BookForm />
      <BookList />
    </>
  );
}
