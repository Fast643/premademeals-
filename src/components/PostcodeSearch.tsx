import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { useLocationStore } from '../store/locationStore';
import { lookupPostcode } from '../lib/api';
import { cn } from '../lib/utils';

export function PostcodeSearch() {
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const setLocation = useLocationStore((state) => state.setLocation);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const data = await lookupPostcode(postcode);
      setLocation({
        town: data.result.admin_district,
        postcode: data.result.postcode,
        latitude: data.result.latitude,
        longitude: data.result.longitude,
      });
    } catch (err) {
      setError('Please enter a valid UK postcode');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="relative">
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value.toUpperCase())}
          placeholder="Enter your postcode"
          className={cn(
            "w-full px-6 py-4 text-lg rounded-full border-2",
            "focus:outline-none focus:ring-2",
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-200"
              : "border-primary-200 focus:border-primary-500 focus:ring-primary-200",
            "placeholder:text-gray-600"
          )}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2",
            "bg-primary-500 text-white p-3 rounded-full",
            "hover:bg-primary-600 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-primary-300",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Search className="w-6 h-6" />
          )}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </form>
  );
}
