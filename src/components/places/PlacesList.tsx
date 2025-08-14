'use client';

import { redirect } from 'next/navigation';

export function PlacesList() {
  const getPlaceRedirect = (placeId) => () => redirect(`/places/${placeId}`);

  return (
    <ul>
      <li onClick={getPlaceRedirect(3)}>Place C</li>
      <li onClick={getPlaceRedirect(2)}>Place B</li>
      <li onClick={getPlaceRedirect(1)}>Place A</li>
    </ul>
  );
}
