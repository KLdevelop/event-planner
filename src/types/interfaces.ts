import { Moment } from 'moment';

export interface TabListElement {
  name: string;
  link: string;
}

export interface Event {
  eventId: number;
  eventname: string;
  content: string;
  author: string;
  location: string;
  date: Moment;
  rating: number;
  firstplace: string;
  secondplace: string;
  thirdplace: string;
}

export interface EventState {
  events: Event[];
}

export interface AuthUser {
  email: string;
  password: string;
}

export interface RegistrationUser extends AuthUser {
  username: string;
  surname: string;
  lastname?: string;
  role: string;
}

export interface User extends RegistrationUser {
  id: number;
  rating: number;
  results: number;
  team: string[];
  passportserandnum: number;
  passportregloc: string;
  passportcreatedate: Moment;
  passportcode: number;
  addresscountry: string;
  addresscity: string;
  addressstreet: string;
  addresshouse: string;
  addressappartment: number;
  medpolisnum: number;
}
