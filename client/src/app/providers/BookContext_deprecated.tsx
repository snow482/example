import { Book, BookList } from '@/entities/book';
import { BookId } from '@/entities/book/model';
import { createContext, ReactNode, useReducer, Dispatch } from 'react';

// Перечисление операций для книг
export enum BOOK_ACTION_TYPE {
    INIT_BOOKS = 'INIT_BOOKS',
    ADD_BOOK = 'ADD_BOOK',
    DELETE_BOOK = 'DELETE_BOOK',
    UPDATE_BOOK = 'UPDATE_BOOK'
}

// Типизация состояния состояния (книги)
type BookState = {
    books: BookList
}

// Типизация действий над состоянием (книги)
type Action =
    | { type: BOOK_ACTION_TYPE.ADD_BOOK; payload: Book }
    | { type: BOOK_ACTION_TYPE.INIT_BOOKS; payload: BookList }
    | { type: BOOK_ACTION_TYPE.UPDATE_BOOK; payload: Book }
    | { type: BOOK_ACTION_TYPE.DELETE_BOOK; payload: BookId }

// Начальное состояние (книги)
const initialState: BookState = {
    books: []
}

// Функция редьюсер
const booksReducer = (state: BookState, action: Action) => {
    switch (action.type) {
        case BOOK_ACTION_TYPE.INIT_BOOKS:
            return { ...state, books: action.payload }
        case BOOK_ACTION_TYPE.ADD_BOOK:
            return { ...state, books: [...state.books, action.payload] }
        case BOOK_ACTION_TYPE.DELETE_BOOK:
            return { ...state, books: state.books.filter(book => book.id !== action.payload) }
        case BOOK_ACTION_TYPE.UPDATE_BOOK:
            return {
                ...state, books: state.books.map(book => {
                    return book.id === action.payload.id ? action.payload : book
                })
            }
        default:
            throw new Error('Error action type')
    }
}

// Типизация контекста
type BookContextType = {
    state: BookState;
    dispatch: Dispatch<Action>;
}

// Создание контекста
export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(booksReducer, initialState);

    return (
        <BookContext.Provider value={{ state, dispatch }}>
            {children}
        </BookContext.Provider>
    )
};