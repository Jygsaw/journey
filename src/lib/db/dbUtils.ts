import { Place } from '@/types';

const dummyPlace: Place = {
  id: 999999999,
  name: 'fakeName',
  desc: 'fakeDesc',
};

export async function createPlace() {
  console.log(">> createPlace");
  return new Promise((resolve) => {
    resolve(dummyPlace);
  });
}

export async function getPlace(placeId) {
  console.log(">> getPlace:", placeId);
  return new Promise((resolve) => {
    resolve(dummyPlace);
  });
}

export async function updatePlace(place) {
  console.log(">> updatePlace:", place);
  return new Promise((resolve) => {
    resolve(place);
  });
}

export async function deletePlace(placeId) {
  console.log(">> deletePlace:", placeId);
  return new Promise((resolve) => {
    resolve(true);
  });
}
