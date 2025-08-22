"use client";

import { use } from "react";
import Link from "next/link";

interface InputProps {
  journeysPromise: Promise<Journey[]>;
}

export const JourneysList = ({ journeysPromise }: InputProps) => {
  const journeys = use(journeysPromise);

  return (
    <ul>
      {journeys.map(({ id, name }) =>
        <li key={id}><Link href={`/journeys/${id}`}>{name}</Link></li>
      )}
    </ul>
  );
};
