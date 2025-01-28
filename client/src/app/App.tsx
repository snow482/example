import { RouterProvider } from "react-router-dom";
import { router } from "./router";
//import { UserProvider } from "./providers/UserContext";
//import { BookProvider } from "./providers/BookContext";
import store from "./store/store";
import { Provider } from "react-redux";

export function App(): JSX.Element {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  )
}