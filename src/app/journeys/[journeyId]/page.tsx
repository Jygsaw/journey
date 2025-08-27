import { Suspense } from "react";
import { getJourney, getPlacesFromJourney, getLocationsFromPlaces } from "@/api/apiUtils";
import { EditJourney } from "@/components/journeys/EditJourney";

export const metadata: Metadata = {
  title: "View Journey",
  description: "View and edit a journey",
};

export default async function Page({ params }) {
  const { journeyId } = await params;
  const journeyPromise = getJourney(journeyId);
  const placesPromise = getPlacesFromJourney(journeyPromise);
  const locationsPromise = getLocationsFromPlaces(placesPromise);

  return (
    <main>
      <Suspense fallback="Loading...">
        <EditJourney
          journeyPromise={journeyPromise}
          placesPromise={placesPromise}
          locationsPromise={locationsPromise}
        />
      </Suspense>
    </main>
  );
}
