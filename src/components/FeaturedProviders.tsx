import React from 'react';
import { Star, Clock, Truck, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

const providers = [
  {
    id: 1,
    name: "HelloFresh",
    image: "https://images.unsplash.com/photo-1611171711791-b34b41205cfd",
    rating: 4.9,
    deliveryTime: "Weekly Delivery",
    minOrder: "3 meals",
    description: "Fresh ingredients and easy-to-follow recipes",
    website: "https://www.hellofresh.co.uk"
  },
  {
    id: 2,
    name: "Gousto",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842",
    rating: 4.8,
    deliveryTime: "Weekly Delivery",
    minOrder: "2 meals",
    description: "Delicious recipes with premium ingredients",
    website: "https://www.gousto.co.uk"
  },
  {
    id: 3,
    name: "Mindful Chef",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    rating: 4.7,
    deliveryTime: "Flexible Delivery",
    minOrder: "2 meals",
    description: "Healthy, nutritionist-designed meals",
    website: "https://www.mindfulchef.com"
  },
  {
    id: 4,
    name: "Green Chef",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    rating: 4.6,
    deliveryTime: "Weekly Delivery",
    minOrder: "3 meals",
    description: "Organic and specialized diet meals",
    website: "https://www.greenchef.co.uk"
  },
  {
    id: 5,
    name: "Simply Cook",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    rating: 4.5,
    deliveryTime: "Monthly Box",
    minOrder: "4 kits",
    description: "Recipe kits with premium spice blends",
    website: "https://www.simplycook.com"
  },
  {
    id: 6,
    name: "Balance Box",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
    rating: 4.7,
    deliveryTime: "Weekly Delivery",
    minOrder: "4 meals",
    description: "Calorie-controlled healthy meal plans",
    website: "https://www.balancebox.com"
  }
];

export function FeaturedProviders() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {providers.map((provider) => (
        <div
          key={provider.id}
          className={cn(
            "bg-white rounded-xl shadow-md overflow-hidden",
            "hover:shadow-lg transition-shadow duration-300"
          )}
        >
          <div className="h-48 overflow-hidden">
            <img
              src={provider.image}
              alt={provider.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
            <p className="text-gray-600 mb-4">{provider.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{provider.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{provider.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-4 h-4" />
                <span>Min. {provider.minOrder}</span>
              </div>
            </div>
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "w-full px-4 py-2 rounded-lg",
                "bg-primary-500 text-white",
                "hover:bg-primary-600 transition-colors",
                "font-medium"
              )}
            >
              See Latest Offers
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}