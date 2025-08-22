import { User, Journey, Place, Location } from "@/types";

export const dummyUserA: User = {
  id: 100000001,
  name: "Justin Cheung",
};
export const dummyUserB: User = {
  id: 100000002,
  name: "Jia-Lor Cheung",
};
export const dummyUserC: User = {
  id: 100000003,
  name: "Michael Tsai",
};

export const dummyLocationA: Location = {
  id: 400000001,
  latitude: 37.39577,
  longitude: -121.94950,
  createdBy: 100000001,
};
export const dummyLocationB: Location = {
  id: 400000002,
  latitude: 37.41837,
  longitude: -121.95620,
  createdBy: 100000002,
};
export const dummyLocationC: Location = {
  id: 400000003,
  latitude: 37.41634,
  longitude: -121.95494,
  createdBy: 100000001,
};

export const dummyPlaceA: Place = {
  id: 300000001,
  name: "Place A",
  desc: "Description of Place A.",
  usedByCount: 2,
  locationId: 400000001,
  createdBy: 100000001,
};
export const dummyPlaceB: Place = {
  id: 300000002,
  name: "Place B",
  desc: "Description of Place B.",
  usedByCount: 2,
  locationId: 400000002,
  createdBy: 100000002,
};
export const dummyPlaceC: Place = {
  id: 300000003,
  name: "Place C",
  desc: "Description of Place C.",
  usedByCount: 2,
  locationId: 400000003,
  createdBy: 100000001,
};

export const dummyJourneyA: Journey = {
  id: 200000001,
  name: "Journey A",
  desc: "Description of Journey A.",
  places: [ dummyPlaceA.id, dummyPlaceB.id, dummyPlaceC.id ],
  createdBy: 100000001,
};
export const dummyJourneyB: Journey = {
  id: 200000002,
  name: "Journey B",
  desc: "Description of Journey B.",
  places: [ dummyPlaceA.id, dummyPlaceC.id ],
  createdBy: 100000002,
};
export const dummyJourneyC: Journey = {
  id: 200000003,
  name: "Journey C",
  desc: "Description of Journey C.",
  places: [ dummyPlaceB.id ],
  createdBy: 100000003,
};

export const dummyMessageA: Message = {
  id: 500000001,
  placeId: 300000001,
  content: "Message A",
  createdBy: 100000001,
};
export const dummyMessageB: Message = {
  id: 500000002,
  placeId: 300000002,
  content: "Message B",
  createdBy: 100000002,
};
export const dummyMessageC: Message = {
  id: 500000003,
  placeId: 300000003,
  content: "Message C",
  createdBy: 100000003,
};
