import { Suspense } from "react";
import { getPlace, getLocationFromPlace } from "@/lib/dbUtils";
import { EditPlace } from "@/components/places/EditPlace";
import { AddMessageButton } from "@/components/messages/AddMessageButton";
import { MessagesList } from "@/components/messages/MessagesList";

export const metadata: Metadata = {
  title: "View Place",
  description: "View and edit a place",
};

export default async function Page({ params }) {
  let { placeId } = await params;
  placeId = Number(placeId);
  const placePromise = getPlace(placeId);
  const locationPromise = getLocationFromPlace(placePromise);

  return (
    <main>
      <Suspense fallback="Loading...">
        <EditPlace placePromise={placePromise} locationPromise={locationPromise} />
      </Suspense>
      <br />
      <AddMessageButton placeId={placeId} />
      <MessagesList />
    </main>
  );
}
