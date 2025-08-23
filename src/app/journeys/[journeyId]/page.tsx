import { Suspense } from "react";
import { getJourney, getPlacesFromJourney } from "@/api/apiUtils";
import { EditJourney } from "@/components/journeys/EditJourney";

export const metadata: Metadata = {
  title: "View Journey",
  description: "View and edit a journey",
};

export default async function Page({ params }) {
  const { journeyId } = await params;
  const journeyPromise = getJourney(journeyId);
  const placesPromise = getPlacesFromJourney(journeyPromise);

  return (
    <main>
      <Suspense fallback="Loading...">
        <EditJourney journeyPromise={journeyPromise} placesPromise={placesPromise} />
      </Suspense>
    </main>
  );
}
