import React from 'react';
import { Tag, Percent } from 'lucide-react';
import { cn } from '../lib/utils';

const deals = [
  {
    provider: "HelloFresh",
    discount: "60% OFF",
    code: "HELLO60",
    description: "Get 60% off your first box",
    expiry: "Limited time offer"
  },
  {
    provider: "Gousto",
    discount: "60% OFF",
    code: "GOUSTO60",
    description: "60% off your first box + free delivery",
    expiry: "Valid for new customers"
  },
  {
    provider: "Mindful Chef",
    discount: "£20 OFF",
    code: "MINDFUL20",
    description: "£20 off your first two boxes",
    expiry: "New customers only"
  },
  {
    provider: "Green Chef",
    discount: "50% OFF",
    code: "GREEN50",
    description: "Half price on your first box",
    expiry: "Limited time offer"
  }
];

export function Deals() {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Latest Deals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{deal.provider}</h3>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {deal.discount}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{deal.description}</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary-500" />
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    {deal.code}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{deal.expiry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}