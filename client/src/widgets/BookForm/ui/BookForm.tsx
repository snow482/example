import { useState } from "react";
import { useAppDispatch } from "@/shared/hooks/rtkHooks";
import { createBook } from "@/entities/book/model/bookThunk";

export function BookForm() {
  const dispatch = useAppDispatch();
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [pages, setPages] = useState<number>(0);
  const [category_id, setCategoryId] = useState<number>(0);

  const addBook = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (!author || !title || !pages || !category_id) {
        return alert("Not fill all fields");
      }
      dispatch(createBook({ title, author, pages, category_id }));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <form onSubmit={addBook}>
      <input
        type="text"
        onChange={({ target }) => setAuthor(target.value)}
        defaultValue={author}
        required
        placeholder="Book author"
      />
      <input
        type="text"
        onChange={({ target }) => setTitle(target.value)}
        defaultValue={title}
        required
        placeholder="Book title"
      />
      <input
        type="text"
        onChange={({ target }) => setPages(Number(target.value))}
        defaultValue={pages}
        required
        placeholder="Pages"
      />
      <input
        type="text"
        onChange={({ target }) => setCategoryId(Number(target.value))}
        defaultValue={category_id}
        required
        placeholder="Category"
      />
      <button>Add book</button>
    </form>
  );
}
