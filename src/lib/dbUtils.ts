import { User, Place, Location } from "@/types";
import { wait } from "@/lib/utils";
import {
  dummyUser,
  dummyPlace,
  dummyLocation,
  dummyMessage,
} from "@/lib/dummyData";

const DELAY = 3000;

export const createUser = async (user) => {
  await wait(DELAY);
  return {
    ...dummyUser,
    ...user,
  };
};

export const getUser = async (userId) => {
  if (!userId) return undefined;
  await wait(DELAY);
  return dummyUser;
};

export const updateUser = async (user) => {
  await wait(DELAY);
  return user;
};

export const deleteUser = async () => {
  await wait(DELAY);
  return true;
};

export const createPlace = async (place) => {
  await wait(DELAY);
  return {
    ...dummyPlace,
    ...place,
  };
};

export const getPlace = async (placeId) => {
  if (!placeId) return undefined;
  await wait(DELAY);
  return dummyPlace;
};

export const updatePlace = async (place) => {
  await wait(DELAY);
  return place;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deletePlace = async (placeId) => {
  await wait(DELAY);
  return true;
};

export const createLocation = async (location) => {
  await wait(DELAY);
  return {
    ...dummyLocation,
    ...location,
  };
};

export const getLocation = async (locationId) => {
  if (!locationId) return undefined;
  await wait(DELAY);
  return dummyLocation;
};

export const updateLocation = async (location) => {
  await wait(DELAY);
  return location;
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
    ...dummyMessage,
    ...message,
  };
};

export const getMessage = async (messageId) => {
  if (!messageId) return undefined;
  await wait(DELAY);
  return dummyMessage;
};

export const updateMessage = async (message) => {
  await wait(DELAY);
  return {
    ...dummyMessage,
    ...message,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deleteMessage = async (messageId) => {
  await wait(DELAY);
  return true;
};
