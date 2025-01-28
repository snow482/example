import { BookContext } from "@/app/providers/BookContext";
import { useContext } from "react";

export const useBook = () => {
    const context = useContext(BookContext);

    if (!context) {
        throw new Error('Book Context Error')
    }

    return context;
};