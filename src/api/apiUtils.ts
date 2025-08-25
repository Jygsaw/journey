import {
  readRecords,
  writeRecords,
  insertRecord,
  readRecord,
  updateRecord,
  deleteRecord,
} from "@/db/dbUtils";

export const createUser = async (data) => {
  const record = {
    name: data.name ?? "",
    email: data.email ?? "",
  };
  return await insertRecord("users", record);
};

export const getUser = async (id) => {
  return await readRecord("users", id);
};

export const updateUser = async (data) => {
  const record = {
    id: data.id ?? "",
    name: data.name ?? "",
    emai: data.email ?? "",
  };
  return await updateRecord("users", record);
};

export const deleteUser = async (id) => {
  return await deleteRecord("users", id);
};

export const createJourney = async (data) => {
  const record = {
    name: data.name ?? "",
    desc: data.desc ?? "",
    path: [],
    createdBy: data.createdBy ?? "",
  };
  return await insertRecord("journeys", record);
};

export const getJourney = async (id) => {
  return await readRecord("journeys", id);
};

export const updateJourney = async (data) => {
  const record = {
    id: data.id ?? "",
    name: data.name ?? "",
    desc: data.desc ?? "",
    path: data.path ?? [],
    createdBy: data.createdBy ?? "",
  };
  return await updateRecord("journeys", record);
};

export const deleteJourney = async (id) => {
  const journey = await getJourney(id);
  await Promise.all(journey.path.map(id => deletePlace(id)));
  return await deleteRecord("journeys", id);
};

export const createPlace = async (data) => {
  const record = {
    name: data.name ?? "",
    desc: data.desc ?? "",
    usedByCount: data.usedByCount ?? 0,
    locationId: data.locationId ?? "",
    createdBy: data.createdBy ?? "",
  };
  return await insertRecord("places", record);
};

export const getPlace = async (id) => {
  return await readRecord("places", id);
};

export const updatePlace = async (data) => {
  const record = {
    id: data.id ?? "",
    name: data.name ?? "",
    desc: data.desc ?? "",
    usedByCount: data.usedByCount ?? 0,
    locationId: data.locationId ?? "",
    createdBy: data.createdBy ?? "",
  };
  return await updateRecord("places", record);
};

export const deletePlace = async (id) => {
  const place = await getPlace(id);
  await deleteMessagesForPlace(id);
  await deleteLocation(place.locationId);
  return await deleteRecord("places", id);
};

export const createLocation = async (data) => {
  const record = {
    longitude: data.longitude ?? 0,
    latitude: data.latitude ?? 0,
    createdBy: data.createdBy ?? "",
  };
  return await insertRecord("locations", record);
};

export const getLocation = async (id) => {
  return await readRecord("locations", id);
};

export const updateLocation = async (data) => {
  const record = {
    id: data.id ?? "",
    longitude: data.longitude ?? 0,
    latitude: data.latitude ?? 0,
    createdBy: data.createdBy ?? "",
  };
  return await updateRecord("locations", record);
};

export const deleteLocation = async (id) => {
  return await deleteRecord("locations", id);
};

export const createMessage = async (data) => {
  const record = {
    placeId: data.placeId ?? "",
    content: data.content ?? "",
    createdBy: data.createdBy ?? "",
  };
  return await insertRecord("messages", record);
};

export const getMessage = async (id) => {
  return await readRecord("messages", id);
};

export const updateMessage = async (data) => {
  const record = {
    id: data.id ?? "",
    placeId: data.placeId ?? "",
    content: data.content ?? "",
    createdBy: data.createdBy ?? "",
  };
  return await updateRecord("messages", record);
};

export const deleteMessage = async (id) => {
  return await deleteRecord("messages", id);
};

export const getUserByEmail = async (email) => {
  const users = await readRecords("users");
  return users.find(user => user.email === email);
};

export const getJourneysForUser = async (userId) => {
  const journeys = await readRecords("journeys");
  return journeys.filter(journey => journey.createdBy === userId);
};

export const getPlaces = async () => {
  const places = await readRecords("places");
  return places.filter(place => place.usedByCount === 0);
};

export const getPlacesFromJourney = async (journeyOrPromise) => {
  const journey = await journeyOrPromise;
  return await Promise.all(journey.path.map(id => readRecord("places", id)));
};

export const getLocationFromPlace = async (placeOrPromise) => {
  const place = await placeOrPromise;
  return await getLocation(place.locationId);
};

export const getLocationsFromPlaces = async (placesOrPromise) => {
  const places = await placesOrPromise;
  return await Promise.all(places.map(place => readRecord("locations", place.locationId)));
};

export const getMessagesForPlace = async (placeId) => {
  const messages = await readRecords("messages");
  return messages.filter(message => message.placeId === placeId);
};

export const deleteMessagesForPlace = async (placeId) => {
  const messages = await readRecords("messages");
  const filtered = messages.filter(message => message.placeId !== placeId);
  return await writeRecords("messages", filtered);
};
