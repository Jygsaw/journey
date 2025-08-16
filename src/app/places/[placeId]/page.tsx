import { getPlace, getLocation } from '@/lib/dbUtils';
import { EditPlace } from '@/components/places/EditPlace';
import { AddMessageButton} from './AddMessageButton';
import { MessagesList } from './MessagesList';

export default async function Page({ params }) {
  const { placeId } = await params;
  const place = await getPlace(placeId);
  const location = await getLocation(place.locationId);

  return (
    <section>
      <EditPlace place={place} location={location} />
      <br />
      <AddMessageButton />
      <MessagesList />
    </section>
  );
}
