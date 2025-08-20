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
}

export interface Location {
  id: number;
  latitude: number;
  longitude: number;
}
