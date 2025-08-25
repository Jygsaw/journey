"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { createJourney } from "@/api/apiUtils";
import { UserContext } from "@/contexts/UserContext";

export const AddJourneyButton = () => {
  const router = useRouter();
  const user = use(UserContext);

  const clickHandler = async () => {
    const journey = await createJourney({
      createdBy: user.id,
    });
    router.push(`/journeys/${journey.id}`);
  };

  return <button onClick={clickHandler}>+ Journey</button>;
};
