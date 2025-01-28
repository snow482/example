import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {
  AuthPage,
  BooksPage,
  HomePage,
  RegPage,
  NotFound,
  BookUpdate,
} from "@/pages";

export enum CLIENT_ROUTES {
  HOME = "/",
  AUTH = "/auth",
  REG = "/registration",
  BOOKS = "/books",
  NOT_FOUND = "*",
  UPDATE = "/books/:id",
}

export const router = createBrowserRouter([
  {
    path: CLIENT_ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: CLIENT_ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: CLIENT_ROUTES.AUTH,
        element: <AuthPage />,
      },
      {
        path: CLIENT_ROUTES.REG,
        element: <RegPage />,
      },
      {
        path: CLIENT_ROUTES.BOOKS,
        element: <BooksPage />,
      },
      {
        path: CLIENT_ROUTES.NOT_FOUND,
        element: <NotFound />,
      },
      {
        path: CLIENT_ROUTES.UPDATE,
        element: <BookUpdate />,
      },
    ],
  },
]);
