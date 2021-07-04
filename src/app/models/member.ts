export interface ResponseObject {
  info: Info;
  results: Member[];
}

export interface Info {
  seed: string,
  results: number,
  page: number,
  version: string
}

export interface Member {
  gender: Gender,
  name: Name,
  location: Location
  email: string,
  dob: DOB,
  phone: string,
  picture: Picture
}

export enum Gender {
  male,
  female
}

export interface Name {
  title: string,
  first: string,
  last: string,
}

export interface Location {
  street: Street,
  city: string,
  state: string,
  country: string,
  postcode: number,
  coordinates: Coordinates,
  timezone: TimeZone
}

export interface Street {
  number: number,
  name: string,
}

export interface Coordinates {
  latitude: string,
  longitude: string
}

export interface TimeZone {
  offset: string,
  description: string
}

export interface DOB {
  date: string,
  age: number
}

export interface Picture {
  large: string,
  medium: string,
  thumbnail: string
}
