import { Suspense } from "react";
import { getPlace, getLocationFromPlace, getMessagesForPlace } from "@/api/apiUtils";
import { EditPlace } from "@/components/places/EditPlace";
import { AddMessageButton } from "@/components/messages/AddMessageButton";
import { MessagesList } from "@/components/messages/MessagesList";

export const metadata: Metadata = {
  title: "View Place",
  description: "View and edit a place",
};

export default async function Page({ params }) {
  const { placeId } = await params;
  const placePromise = getPlace(placeId);
  const locationPromise = getLocationFromPlace(placePromise);
  const messagesPromise = getMessagesForPlace(placeId);

  return (
    <main>
      <Suspense fallback="Loading...">
        <EditPlace placePromise={placePromise} locationPromise={locationPromise} />
      </Suspense>
      <br />
      <AddMessageButton placeId={placeId} />
      <br />
      <Suspense fallback="Loading...">
        <MessagesList messagesPromise={messagesPromise} />
      </Suspense>
    </main>
  );
}
