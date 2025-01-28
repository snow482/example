import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Book, BookList } from './index'
import { BookService } from "../api";

type RejectValue = {
    message: string;
};

enum BOOK_THUNK_TYPES_PREFIX {
  CREATE_BOOK = 'book/createBook',
  GET_ALL_BOOKS = 'book/getAllBooks',
  UPDATE_BOOK = 'book/updateBook',
  DELETE_BOOK = 'book/deleteBook',
};

// ----------------------------------- что вернет -------------------------что передаем ----------------------------------- cообщение если fail ---
export const createBook = createAsyncThunk<Book, { title: string, author: string, pages: number, category_id: number }, { rejectValue:RejectValue }>
(BOOK_THUNK_TYPES_PREFIX.CREATE_BOOK, async ({ title, author, pages, category_id }, { rejectWithValue }) => {
  try {
    return await BookService.createBook(title, author, pages, category_id)
  } catch (error) {
    const err = error as AxiosError<{ message: string }>
    return rejectWithValue({
        message: err.response?.data.message || err.message
    });
  }
});

export const getAllBooks = createAsyncThunk<BookList, void, { rejectValue:RejectValue }>
(BOOK_THUNK_TYPES_PREFIX.GET_ALL_BOOKS, async ( _, { rejectWithValue }) => {
  try {
    return await BookService.getAllBooks()
  } catch (error) {
    const err = error as AxiosError<{ message: string }>
    return rejectWithValue({
        message: err.response?.data.message || err.message
    });
  }
});

export const updateBook = createAsyncThunk<
  // типизация полезной нагузки
  Book, 
  // типизация передаваемого параметра (объект с ключами)
  { id: number, title: string, author: string, pages: number, category_id: number },
  // типизация ошибки, в случае отработки catch  
  { rejectValue:RejectValue }>
  // описание операции для redux devtool в браузере 
  (BOOK_THUNK_TYPES_PREFIX.UPDATE_BOOK,
    // передача полезной нагрузки и reject сообщения
    async ({ id, title, author, pages, category_id }, { rejectWithValue }) => {
  try {
    return await BookService.updateBook(id, title, author, pages, category_id)
  } catch (error) {
    const err = error as AxiosError<{ message: string }>
    return rejectWithValue({
        message: err.response?.data.message || err.message
    });
  }
});

export const deleteBook = createAsyncThunk< number, number, { rejectValue:RejectValue }>
(BOOK_THUNK_TYPES_PREFIX.DELETE_BOOK, async ( id, { rejectWithValue }) => {
  try {
    return await BookService.deleteBook(id)
  } catch (error) {
    const err = error as AxiosError<{ message: string }>
    return rejectWithValue({
        message: err.response?.data.message || err.message
    });
  }
});