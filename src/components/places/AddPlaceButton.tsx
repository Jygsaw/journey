'use client';

import { redirect } from 'next/navigation';

export function AddPlaceButton() {
  const clickHandler = () => redirect('/places/4');
  return <button onClick={clickHandler}>+ Place</button>;
}
