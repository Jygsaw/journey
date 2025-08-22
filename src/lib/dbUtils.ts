import { wait } from "@/lib/utils";
import {
  dummyUserA,
  dummyJourneyA,
  dummyJourneyB,
  dummyJourneyC,
  dummyPlaceA,
  dummyPlaceB,
  dummyPlaceC,
  dummyLocationA,
  dummyMessageA,
  dummyMessageB,
  dummyMessageC,
} from "@/lib/dummyData";

const DELAY = 3000;

export const createUser = async (user) => {
  await wait(DELAY);
  return {
    ...dummyUserA,
    ...user,
  };
};

export const getUser = async (userId) => {
  if (!userId) return undefined;
  await wait(DELAY);
  return dummyUserA;
};

export const updateUser = async (user) => {
  await wait(DELAY);
  return {
    ...dummyUserA,
    ...user,
  };
};

export const deleteUser = async () => {
  await wait(DELAY);
  return true;
};

export const createJourney = async (journey) => {
  await wait(DELAY);
  return {
    ...dummyJourneyA,
    ...journey,
  };
};

export const getJourney = async (journeyId) => {
  if (!journeyId) return undefined;
  await wait(DELAY);
  return dummyJourneyA;
};

export const updateJourney = async (journey) => {
  await wait(DELAY);
  return {
    ...dummyJourneyA,
    ...journey,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deleteJourney = async (journeyId) => {
  await wait(DELAY);
  return true;
};

export const getJourneys = async (userId) => {
  if (!userId) return [];
  await wait(DELAY);
  return [ dummyJourneyA, dummyJourneyB, dummyJourneyC ];
};

export const createPlace = async (place) => {
  await wait(DELAY);
  return {
    ...dummyPlaceA,
    ...place,
  };
};

export const getPlace = async (placeId) => {
  if (!placeId) return undefined;
  await wait(DELAY);
  return dummyPlaceA;
};

export const updatePlace = async (place) => {
  await wait(DELAY);
  return {
    ...dummyPlaceA,
    ...place,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deletePlace = async (placeId) => {
  await wait(DELAY);
  return true;
};

export const getPlaces = async () => {
  await wait(DELAY);
  return [ dummyPlaceA, dummyPlaceB, dummyPlaceC ];
};

export const getPlacesFromJourney = async (journeyOrPromise) => {
  const journey = await journeyOrPromise;
  // TODO: fetch specific places based on journey.places
  return [ dummyPlaceA, dummyPlaceB, dummyPlaceC ];
};

export const createLocation = async (location) => {
  await wait(DELAY);
  return {
    ...dummyLocationA,
    ...location,
  };
};

export const getLocation = async (locationId) => {
  if (!locationId) return undefined;
  await wait(DELAY);
  return dummyLocationA;
};

export const updateLocation = async (location) => {
  await wait(DELAY);
  return {
    ...dummyLocationA,
    ...location,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deleteLocation = async (locationId) => {
  await wait(DELAY);
  return true;
};

export const getLocationFromPlace = async (placeOrPromise) => {
  const place = await placeOrPromise;
  return await getLocation(place.locationId);
};

export const createMessage = async (message) => {
  await wait(DELAY);
  return {
    ...dummyMessageA,
    ...message,
  };
};

export const getMessage = async (messageId) => {
  if (!messageId) return undefined;
  await wait(DELAY);
  return dummyMessageA;
};

export const updateMessage = async (message) => {
  await wait(DELAY);
  return {
    ...dummyMessageA,
    ...message,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deleteMessage = async (messageId) => {
  await wait(DELAY);
  return true;
};

export const getMessages = async (placeId) => {
  if (!placeId) return [];
  await wait(DELAY);
  return [ dummyMessageA, dummyMessageB, dummyMessageC ];
};
