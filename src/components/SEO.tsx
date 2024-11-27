import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLocationStore } from '../store/locationStore';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ title, description }: SEOProps) {
  const location = useLocationStore((state) => state.location);
  const pathname = useLocation().pathname;
  
  const getMetaTitle = () => {
    const baseTitle = location?.town 
      ? `Meal Delivery Services in ${location.town}`
      : 'Compare Meal Delivery Services Near You';
      
    const titleMap: Record<string, string> = {
      '/': `${baseTitle} | Up to 60% Off First Box`,
      '/providers': `Best Meal Delivery Services ${location?.town ? `in ${location.town}` : 'UK'} | Compare Providers`,
      '/deals': 'Exclusive Meal Delivery Deals & Discounts | Up to 60% Off',
      '/how-it-works': 'How to Find & Compare Meal Delivery Services | Simple Guide',
    };

    return title || titleMap[pathname] || baseTitle;
  };

  const getMetaDescription = () => {
    const locationText = location?.town ? ` in ${location.town}` : '';
    
    const descriptionMap: Record<string, string> = {
      '/': `Compare UK's top meal delivery services${locationText}. Find exclusive deals from HelloFresh, Gousto & more. Save up to 60% on your first box. Enter your postcode now!`,
      '/providers': `Find and compare the best meal delivery services${locationText}. Read reviews, compare prices, and get exclusive discounts on HelloFresh, Gousto, and more.`,
      '/deals': `Exclusive meal delivery discounts and offers${locationText}. Save up to 60% on your first box from top providers like HelloFresh and Gousto.`,
      '/how-it-works': `Learn how to find, compare, and save on meal delivery services${locationText}. Simple guide to choosing the best meal box subscription for you.`,
    };

    return description || descriptionMap[pathname];
  };

  React.useEffect(() => {
    // Update meta tags
    document.title = getMetaTitle();
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', getMetaDescription() || '');
    }
  }, [pathname, location?.town]);

  return null;
}