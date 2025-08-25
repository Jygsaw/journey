"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { createMessage } from "@/api/apiUtils";
import { UserContext } from "@/contexts/UserContext";

interface InputProps {
  placeId: number;
}

export const AddMessageButton =({ placeId }: InputProps) => {
  const router = useRouter();
  const user = use(UserContext);

  const clickHandler = async () => {
    const message = await createMessage({
      placeId,
      createdBy: user.id,
    });
    router.push(`/messages/${message.id}`);
  };

  return <button onClick={clickHandler}>+ Message</button>;
};
