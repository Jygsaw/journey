import { Place } from '@/types';

const dummyPlace: Place = {
  id: 999999999,
  name: 'fakeName',
  desc: 'fakeDesc',
};

const DELAY = 3000;

export async function createPlace() {
  console.log(">> createPlace");
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyPlace), 3000);
  });
}

export async function getPlace(placeId) {
  console.log(">> getPlace:", placeId);
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyPlace), 3000);
  });
}

export async function updatePlace(place) {
  console.log(">> updatePlace:", place);
  return new Promise((resolve) => {
    setTimeout(() => resolve(place), 3000);
  });
}

export async function deletePlace(placeId) {
  console.log(">> deletePlace:", placeId);
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 3000);
  });
}
