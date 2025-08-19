import { Suspense } from 'react';
import { getAuth } from '@/lib/authUtils';
import { getPlace, getLocationFromPlace } from '@/lib/dbUtils';
import { EditPlace } from '@/components/places/EditPlace';
import { AddMessageButton} from './AddMessageButton';
import { MessagesList } from './MessagesList';

export const metadata: Metadata = {
  title: "View Place",
  description: "View and edit a place",
};

export default async function Page({ params }) {
  const { placeId } = await params;
  const placePromise = getPlace(placeId);
  const locationPromise = getLocationFromPlace(placePromise);

  return (
    <main>
      <Suspense fallback="Loading...">
        <EditPlace placePromise={placePromise} locationPromise={locationPromise} />
      </Suspense>
      <br />
      <AddMessageButton />
      <MessagesList />
    </main>
  );
}
