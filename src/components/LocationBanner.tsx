import React from 'react';
import { MapPin, X } from 'lucide-react';
import { useLocationStore } from '../store/locationStore';
import { cn } from '../lib/utils';

export function LocationBanner() {
  const { location, clearLocation } = useLocationStore();

  if (!location) return null;

  return (
    <div className={cn(
      "bg-primary-50 border-b border-primary-100",
      "py-2 px-4 text-sm text-primary-800"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Finding meals in <strong>{location.town}</strong></span>
        </div>
        <button
          onClick={clearLocation}
          className="text-primary-600 hover:text-primary-800"
          aria-label="Clear location"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}