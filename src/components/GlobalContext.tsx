"use client";

import { Auth } from "@/types";
import { UserContext } from "@/contexts/UserContext";

interface InputProps {
  auth: Auth,
}

export const GlobalContext = ({ auth, children }: InputProps) => {
  return (
    <UserContext value={auth.user}>
      {children}
    </UserContext>
  );
};
