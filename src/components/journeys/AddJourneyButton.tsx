"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { createJourney } from "@/lib/dbUtils";
import { UserContext } from "@/contexts/UserContext";

export const AddJourneyButton = () => {
  const user = use(UserContext);
  const router = useRouter();

  const clickHandler = async () => {
    const journey = await createJourney({
      createdBy: user.id,
    });
    router.push(`/journeys/${journey.id}`);
  };

  return <button onClick={clickHandler}>+ Journey</button>;
};
