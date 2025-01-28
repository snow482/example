import { CLIENT_ROUTES } from "@/app/router";
import { logout } from "@/entities/user/model/userThunk";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/rtkHooks";
import { Link, useNavigate } from "react-router-dom";

export function Nav() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.user)
  
  const handlerLogout = () => {
    dispatch(logout());
    navigate(CLIENT_ROUTES.AUTH);
  }

  return (
    <nav>
      <ul>
        {user
          ? (
            <>
              <li>
                <Link to={CLIENT_ROUTES.HOME}>Home</Link>
              </li>
              <li>
                <Link to={CLIENT_ROUTES.BOOKS}>Books</Link>
              </li>
              <li>
                <a onClick={handlerLogout} href="#">Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={CLIENT_ROUTES.AUTH}>Auth</Link>
              </li>
              <li>
                <Link to={CLIENT_ROUTES.REG}>Reg</Link>
              </li>
            </>
          )}
      </ul>
    </nav>
  );
}

