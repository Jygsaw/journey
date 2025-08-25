"use server";

import { cookies } from "next/headers";
import { getUser, getUserByEmail } from "@/api/apiUtils";

export const authenticate = async (userNameOrEmail: string) => {
  const cookieStore = await cookies();
  cookieStore.delete("user_id");

  const user = await getUserByEmail(userNameOrEmail);

  if (!user) return false;

  cookieStore.set("user_id", user.id);

  return true;
};

export const getAuth = async (pathname: string) => {
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;

  const authenticated = {};
  authenticated.user = await getUser(userId);

  return authenticated;
};
