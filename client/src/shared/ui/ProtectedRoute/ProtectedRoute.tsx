import { CLIENT_ROUTES } from "@/app/router";
import { useAppSelector } from "@/shared/hooks/rtkHooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: ReactNode }):
  | JSX.Element
  | {
      children: React.ReactNode;
    } {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      {!user ? <Navigate to={CLIENT_ROUTES.AUTH} /> : { children }}
    </>
  )
}
