import { createSlice } from "@reduxjs/toolkit";
import { BookList } from ".";
import { createBook, getAllBooks, updateBook, deleteBook } from "./bookThunk";

// Определяем тип состояния для хранилища пользователя
type BookState = {
  books: BookList;
  error: string | null;
  loading: boolean;
};

// Устанавливаем начальное состояние
const initialState: BookState = {
  books: [],
  error: null,
  loading: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.loading = false;

        state.books = [...state.books, action.payload ]; 
        state.error = null;
      })
      .addCase(createBook.rejected, (state) => {
        state.loading = false; 
      })

      .addCase(getAllBooks.pending, (state) => {
        state.loading = true; 
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books =  action.payload;
        state.error = null;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.loading = false;
      })

      .addCase(updateBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.map((book) => {
          return book.id === action.payload.id ? action.payload : book
        });
        state.error = null;
      })
      .addCase(updateBook.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books =  state.books.filter(book => book.id !== action.payload);
        state.error = null;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.loading = false;
      })
  }
})

export default bookSlice.reducer;