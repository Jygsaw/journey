'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { createPlace } from '@/lib/dbUtils';
import { UserContext } from '@/contexts/UserContext';

export function AddPlaceButton() {
  const user = use(UserContext);
  const router = useRouter();

  const clickHandler = async () => {
    const place = await createPlace({
      createdBy: user.id,
    });
    router.push(`/places/${place.id}`);
  };

  return <button onClick={clickHandler}>+ Place</button>;
}
