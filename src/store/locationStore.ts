import { create } from 'zustand';
import { Location, getLocation, saveLocation } from '../lib/location';

interface LocationState {
  location: Location | null;
  setLocation: (location: Location) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  location: getLocation(),
  setLocation: (location: Location) => {
    saveLocation(location);
    set({ location });
  },
  clearLocation: () => {
    set({ location: null });
  },
}));