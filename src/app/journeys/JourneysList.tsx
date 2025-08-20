"use client";

import { redirect } from "next/navigation";

export function JourneysList() {
  const getJourneyRedirect = (journeyId) => () => redirect(`/journeys/${journeyId}`);

  return (
    <ul>
      <li onClick={getJourneyRedirect(3)}>Journey C</li>
      <li onClick={getJourneyRedirect(2)}>Journey B</li>
      <li onClick={getJourneyRedirect(1)}>Journey A</li>
    </ul>
  );
}
