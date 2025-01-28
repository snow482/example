import { CLIENT_ROUTES } from "@/app/router";
import { registration } from "@/entities/user/model/userThunk";
import { useAppDispatch } from "@/shared/hooks/rtkHooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RegistrationForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Pass no ok!");
    }

    dispatch(registration({ email, password }));
    navigate(CLIENT_ROUTES.HOME);
  };

  return (
    <form onSubmit={handlerRegister}>
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
      <input
        defaultValue={confirmPassword}
        onChange={({ target }) => setConfirmPassword(target.value)}
        type="password"
        required
        placeholder="Confirm password"
      />
      <button type="submit">Registration</button>
    </form>
  );
}
