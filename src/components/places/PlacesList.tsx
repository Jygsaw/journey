"use client";

import { use } from "react";
import Link from "next/link";

interface InputProps {
  placesPromise: Promise<Place[]>;
}

export const PlacesList = ({ placesPromise }: InputProps) => {
  const places = use(placesPromise);

  return (
    <ul>
      {places.map(({ id, name }) =>
        <li key={id}><Link href={`/places/${id}`}>{name}</Link></li>
      )}
    </ul>
  );
};
