export interface Auth {
  user: User;
}

export interface User {
  id: number;
  name: string;
}

export interface Place {
  id: number;
  name: string;
  desc: string;
  createdBy: number;
}

export interface Location {
  id: number;
  latitude: number;
  longitude: number;
  createdBy: number;
}

export interface Message {
  id: number;
  placeId: number;
  content: string;
  createdBy: number;
}
