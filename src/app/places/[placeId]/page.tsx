import { getPlace } from '@/lib/db/dbUtils';
import { EditPlace } from '@/components/places/EditPlace';
import { AddMessageButton} from './AddMessageButton';
import { MessagesList } from './MessagesList';

export default async function Page({ params }) {
  const { placeId } = await params;
  const place = await getPlace(placeId);

  return (
    <section>
      <EditPlace place={place} />
      <br />
      <AddMessageButton />
      <MessagesList />
    </section>
  );
}
