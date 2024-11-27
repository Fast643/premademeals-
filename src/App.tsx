import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Providers } from './pages/Providers';
import { Deals } from './pages/Deals';
import { LocationBanner } from './components/LocationBanner';
import { SEO } from './components/SEO';
import { cn } from './lib/utils';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <SEO />
        <LocationBanner />
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="font-bold text-xl text-primary-600">PremadeMealsNearMe</Link>
            <div className="flex gap-6">
              <Link to="/how-it-works" className="text-gray-600 hover:text-primary-600">How it Works</Link>
              <Link to="/providers" className="text-gray-600 hover:text-primary-600">Providers</Link>
              <Link to="/deals" className="text-gray-600 hover:text-primary-600">Deals</Link>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/deals" element={<Deals />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-white mb-4">About Us</h3>
                <p className="text-sm">
                  PremadeMealsNearMe helps you find and compare the best meal delivery services in your area.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/how-it-works" className="hover:text-white">How it Works</Link></li>
                  <li><Link to="/providers" className="hover:text-white">Find Providers</Link></li>
                  <li><Link to="/deals" className="hover:text-white">Latest Deals</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li>Email: info@premademealsnearme.co.uk</li>
                  <li>Phone: 0800 123 4567</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
              © {new Date().getFullYear()} PremadeMealsNearMe.co.uk. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;