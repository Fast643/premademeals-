import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProviders } from '../components/FeaturedProviders';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO 
        title="Compare Meal Delivery Services Near You | Up to 60% Off First Box"
        description="Compare UK's top meal delivery services. Find exclusive deals from HelloFresh, Gousto & more. Save up to 60% on your first box. Enter your postcode now!"
      />
      <Hero />
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Meal Providers
          </h2>
          <FeaturedProviders />
        </div>
      </section>
    </>
  );
}