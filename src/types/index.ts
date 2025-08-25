export interface Auth {
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Journey {
  id: string;
  name: string;
  desc: string;
  path: string[];
  createdBy: string;
}

export interface Place {
  id: string;
  name: string;
  desc: string;
  usedByCount: number;
  locationId: string;
  createdBy: string;
}

export interface Location {
  id: string;
  longitude: number;
  latitude: number;
  createdBy: string;
}

export interface Message {
  id: string;
  placeId: string;
  content: string;
  createdBy: string;
}
