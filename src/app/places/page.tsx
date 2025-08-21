import { Suspense } from "react";
import { getPlaces } from "@/lib/dbUtils";
import { AddPlaceButton } from "@/components/places/AddPlaceButton";
import { PlacesList } from "@/components/places/PlacesList";

export const metadata: Metadata = {
  title: "View Places",
  description: "View places",
};

export default async function Page() {
  const placesPromise = getPlaces();

  return (
    <main>
      <AddPlaceButton />
      <br />
      <Suspense fallback="Loading...">
        <PlacesList placesPromise={placesPromise} />
      </Suspense>
    </main>
  );
}
