import { Suspense } from "react";
import { getAuth } from "@/lib/authUtils";
import { getJourneys } from "@/lib/dbUtils";
import { AddJourneyButton } from "@/components/journeys/AddJourneyButton";
import { JourneysList } from "@/components/journeys/JourneysList";

export const metadata: Metadata = {
  title: "View Journeys",
  description:", View journeys",
};

export default async function Page() {
  const { user } = await getAuth();
  const journeysPromise = getJourneys(user.id);

  return (
    <main>
      <AddJourneyButton />
      <br />
      <Suspense fallback="Loading...">
        <JourneysList journeysPromise={journeysPromise} />
      </Suspense>
    </main>
  );
}
