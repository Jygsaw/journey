import { getPlace } from '@/lib/db/dbUtils';
import { AddMessageButton} from './AddMessageButton';
import { MessagesList } from './MessagesList';

export default async function Page({ params }) {
  const { placeId } = await params;
  const place = await getPlace(placeId);

  return (
    <section>
      <div>
        MAP
      </div>
      <ul>
        <li>{place.name}</li>
        <li>{place.desc}</li>
      </ul>
      <AddMessageButton />
      <MessagesList />
    </section>
  );
}
