import React from 'react';
import { CheckCircle2, Search, CreditCard, Truck } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-primary-500" />,
      title: "Find Local Services",
      description: "Enter your postcode to discover meal delivery services available in your area"
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-primary-500" />,
      title: "Compare Options",
      description: "Browse menus, read reviews, and compare prices to find the perfect service"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary-500" />,
      title: "Choose & Save",
      description: "Select your preferred service and save with our exclusive discounts"
    },
    {
      icon: <Truck className="w-12 h-12 text-primary-500" />,
      title: "Get Delivered",
      description: "Enjoy fresh, delicious meals delivered right to your door"
    }
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}