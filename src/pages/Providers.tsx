import React from 'react';
import { FeaturedProviders } from '../components/FeaturedProviders';

export function Providers() {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Meal Providers</h1>
        <div className="mb-12">
          <FeaturedProviders />
        </div>
      </div>
    </div>
  );
}