import { redirect } from "next/navigation";
import { getUser } from "@/lib/dbUtils";

export const getAuth = async () => {
  const authenticated = {};

  const isLoggedIn = true;
  if (!isLoggedIn) {
    redirect("/");
  }

  const userId = 999999999;
  authenticated.user = await getUser(userId);

  return authenticated;
};
