import React from 'react';
import { PostcodeSearch } from './PostcodeSearch';
import { cn } from '../lib/utils';

export function Hero() {
  return (
    <div className={cn(
      "relative bg-gradient-to-br from-primary-600 to-primary-800",
      "py-20 px-6 text-white text-center"
    )}>
      <div className="max-w-4xl mx-auto">
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
          "tracking-tight leading-tight"
        )}>
          Find Premium Meal Services Near You
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-primary-100">
          Compare prices, read reviews, and get exclusive deals on meal delivery services in your area
        </p>
        <PostcodeSearch />
      </div>
    </div>
  );
}