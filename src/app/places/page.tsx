import { AddPlaceButton } from '@/components/places/AddPlaceButton';
import { PlacesList } from '@/components/places/PlacesList';

export default async function Page() {
  return (
    <main>
      <AddPlaceButton />
      <PlacesList />
    </main>
  );
}
