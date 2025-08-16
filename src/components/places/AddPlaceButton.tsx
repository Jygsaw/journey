'use client';

import { useRouter } from 'next/navigation';
import { createPlace } from '@/lib/dbUtils';

export function AddPlaceButton() {
  const router = useRouter();
  const clickHandler = async () => {
    const place = await createPlace();
    router.push(`/places/${place.id}`);
  };
  return <button onClick={clickHandler}>+ Place</button>;
}
