export interface UserInterface {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  registerDate: string;
  location: LocationInterface;
}
export interface LocationInterface {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}
