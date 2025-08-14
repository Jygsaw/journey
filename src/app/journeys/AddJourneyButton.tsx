'use client';

import { redirect } from 'next/navigation';

export function AddJourneyButton() {
  const clickHandler = () => redirect('/journeys/4');
  return <button onClick={clickHandler}>+ Journey</button>;
}
