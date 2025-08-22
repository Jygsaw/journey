"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { createPlace, getJourney, updateJourney } from "@/lib/dbUtils";
import { UserContext } from "@/contexts/UserContext";

interface InputProps {
  journeyId?: number;
}

export const AddPlaceButton = ({ journeyId }: InputProps) => {
  const user = use(UserContext);
  const router = useRouter();

  const clickHandler = async () => {
    const place = await createPlace({
      usedByCount: journeyId ? 1 : 0,
      createdBy: user.id,
    });

    if (journeyId) {
      const journey = await getJourney(journeyId);
      journey.places.push(place.id);
      await updateJourney(journey);
    }

    router.push(`/places/${place.id}`);
  };

  return <button onClick={clickHandler}>+ Place</button>;
};
