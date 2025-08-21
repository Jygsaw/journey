import { User, Place, Location } from "@/types";
export const dummyUser: User = {
  id: 999999999,
  name: "Justin Cheung",
};

export const dummyPlaceA: Place = {
  id: 999999991,
  name: "fakeNameA",
  desc: "fakeDescA",
  createdBy: 999999999,
};
export const dummyPlaceB: Place = {
  id: 999999992,
  name: "fakeNameB",
  desc: "fakeDescB",
  createdBy: 999999999,
};
export const dummyPlaceC: Place = {
  id: 999999993,
  name: "fakeNameC",
  desc: "fakeDescC",
  createdBy: 999999999,
};

export const dummyLocation: Location = {
  id: 999999999,
  latitude: 35.33960,
  longitude: -119.13054,
  createdBy: 999999999,
};

export const dummyMessageA: Message = {
  id: 999999991,
  placeId: 999999999,
  content: "fakeMessageA",
  createdBy: 999999999,
};
export const dummyMessageB: Message = {
  id: 999999992,
  placeId: 999999999,
  content: "fakeMessageB",
  createdBy: 999999999,
};
export const dummyMessageC: Message = {
  id: 999999993,
  placeId: 999999999,
  content: "fakeMessageC",
  createdBy: 999999999,
};
