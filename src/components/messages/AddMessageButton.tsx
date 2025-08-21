"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { createMessage } from "@/lib/dbUtils";
import { UserContext } from "@/contexts/UserContext";

interface InputProps {
  placeId: number;
}

export const AddMessageButton =({ placeId }: InputProps) => {
  const user = use(UserContext);
  const router = useRouter();

  const clickHandler = async () => {
    const message = await createMessage({
      placeId,
      createdBy: user.id,
    });
    router.push(`/messages/${message.id}`);
  };

  return <button onClick={clickHandler}>+ Message</button>;
};
