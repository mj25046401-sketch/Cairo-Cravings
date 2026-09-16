import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu as MenuIcon, X, Utensils, ShoppingBag } from 'lucide-react';
import { STORE_INFO } from '../data';

interface NavbarProps {
  onOrderClick: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/95 backdrop-blur-md shadow-xl py-3 border-b border-amber-900/30'
          : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            {/* Pyramid & Scarab Icon Emblem */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gray-950 rounded-[7px] flex items-center justify-center relative overflow-hidden">
                <svg
                  className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Stylized Pyramid & Nile Sun / Scarab */}
                  <polygon points="12 2 2 20 22 20" stroke="currentColor" fill="rgba(217, 119, 6, 0.15)" />
                  <line x1="12" y1="2" x2="12" y2="20" stroke="currentColor" />
                  <line x1="7" y1="11" x2="17" y2="11" stroke="currentColor" />
                  <circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wide text-amber-400 group-hover:text-amber-300 transition-colors">
                Cairo Cravings
              </span>
              <span className="text-[10px] tracking-widest text-amber-200/70 uppercase font-heading hidden sm:block">
                Authentic Egyptian Street Food
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider text-gray-200 uppercase font-heading">
            <a
              href="#classics"
              className="hover:text-amber-400 transition-colors py-1 relative group"
              id="nav-link-classics"
            >
              Egyptian Classics
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#menu"
              className="hover:text-amber-400 transition-colors py-1 relative group"
              id="nav-link-menu"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#story"
              className="hover:text-amber-400 transition-colors py-1 relative group"
              id="nav-link-story"
            >
              Our Story
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#location"
              className="hover:text-amber-400 transition-colors py-1 relative group"
              id="nav-link-location"
            >
              Location & Hours
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-amber-400 transition-colors py-1 relative group"
              id="nav-link-contact"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Call Button */}
            <a
              href={STORE_INFO.phoneRaw}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-gray-300 hover:text-amber-400 hover:bg-gray-900 border border-gray-800 transition-all"
              title="Call Cairo Cravings"
              id="header-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>(813) 876-7178</span>
            </a>

            {/* Order Online CTA Button (matching gold pill button from screenshot) */}
            <button
              onClick={onOrderClick}
              id="header-order-online-btn"
              className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg font-heading text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-gray-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online</span>
              {cartCount > 0 && (
                <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-[10px] font-black bg-red-700 text-white rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle Navigation"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-gray-950/98 border-b border-amber-900/40 px-6 py-6 shadow-2xl space-y-4 text-center animate-fadeIn"
        >
          <div className="flex flex-col space-y-3 font-heading uppercase text-sm font-semibold tracking-wider text-gray-200">
            <a
              href="#classics"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-gray-900"
            >
              Egyptian Classics
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-gray-900"
            >
              Full Menu
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-gray-900"
            >
              Our Story
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400 border-b border-gray-900"
            >
              Location & Hours
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-amber-400"
            >
              Contact
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={STORE_INFO.phoneRaw}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gray-900 text-amber-400 text-xs font-semibold border border-amber-500/20"
            >
              <Phone className="w-4 h-4" />
              Call (813) 876-7178
            </a>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gray-900 text-gray-300 text-xs font-semibold"
            >
              <MapPin className="w-4 h-4 text-red-500" />
              11009 N 56th St, Temple Terrace
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
