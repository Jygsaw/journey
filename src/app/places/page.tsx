import { AddPlaceButton } from '@/components/places/AddPlaceButton';
import { PlacesList } from '@/components/places/PlacesList';

export default function Page() {
  return (
    <section>
      <AddPlaceButton />
      <PlacesList />
    </section>
  );
}
