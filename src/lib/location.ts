import Cookies from 'js-cookie';

export interface Location {
  town: string;
  postcode: string;
  latitude: number;
  longitude: number;
}

const LOCATION_COOKIE = 'user_location';

export const saveLocation = (location: Location) => {
  Cookies.set(LOCATION_COOKIE, JSON.stringify(location), { expires: 30 });
};

export const getLocation = (): Location | null => {
  const locationCookie = Cookies.get(LOCATION_COOKIE);
  return locationCookie ? JSON.parse(locationCookie) : null;
};

export const clearLocation = () => {
  Cookies.remove(LOCATION_COOKIE);
};