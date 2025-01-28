import { CLIENT_ROUTES } from "@/app/router";
import { authorization } from "@/entities/user/model/userThunk";
import { useAppDispatch } from "@/shared/hooks/rtkHooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AuthorizationForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerAuth = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(authorization({ email, password }));
    navigate(CLIENT_ROUTES.HOME);
  };

  return (
    <form onSubmit={handlerAuth}>
      <input
        defaultValue={email}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        required
        placeholder="You email"
      />
      <input
        defaultValue={password}
        onChange={({ target }) => setPassword(target.value)}
        type="password"
        required
        placeholder="You password"
      />
      <button type="submit">Auth</button>
    </form>
  );
}
