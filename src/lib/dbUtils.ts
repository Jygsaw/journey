import { Place, Location } from '@/types';
import { wait } from '@/lib/utils';

const DELAY = 3000;

const dummyPlace: Place = {
  id: 999999999,
  name: 'fakeName',
  desc: 'fakeDesc',
};

const dummyLocation: Location = {
  id: 999999999,
  latitude: 35.33960,
  longitude: -119.13054,
};

export async function createPlace(place) {
  await wait(DELAY);
  return {
    ...dummyPlace,
    ...place,
  };
}

export async function getPlace(placeId) {
  if (!placeId) return undefined;
  await wait(DELAY);
  return dummyPlace;
}

export async function updatePlace(place) {
  await wait(DELAY);
  return place;
}

export async function deletePlace(placeId) {
  await wait(DELAY);
  return true;
}

export async function createLocation(location) {
  await wait(DELAY);
  return {
    ...dummyLocation,
    ...location,
  };
}

export async function getLocation(locationId) {
  if (!locationId) return undefined;
  await wait(DELAY);
  return dummyLocation;
}

export async function updateLocation(location) {
  await wait(DELAY);
  return location;
}

export async function deleteLocation(locationId) {
  await wait(DELAY);
  return true;
}

export async function getLocationFromPlace(placeOrPromise) {
  const place = await placeOrPromise;
  return await getLocation(place.locationId);
}
