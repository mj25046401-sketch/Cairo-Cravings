import React from 'react';
import { MapPin, ArrowRight, Compass, Sparkles, UtensilsCrossed } from 'lucide-react';
import { STORE_INFO } from '../data';

interface HeroProps {
  onExploreMenu: () => void;
  onGetDirections: () => void;
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onGetDirections, onOrderClick }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] lg:min-h-screen bg-gray-950 pt-28 pb-32 lg:pb-36 flex items-center overflow-hidden"
    >
      {/* Subtle Egyptian geometric background pattern and radial glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-red-700/20 rounded-full blur-3xl"></div>

        {/* Hieroglyphic / geometric vector lattice overlay */}
        <svg className="w-full h-full stroke-amber-500/10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="egypt-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 60 30 L 30 60 L 0 30 Z" fill="none" strokeWidth="0.8" />
              <circle cx="30" cy="30" r="4" fill="none" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#egypt-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines, Address, CTAs, Badge */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left z-10">
            {/* Top Subtitle / Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-amber-500"></span>
              <span className="text-amber-200/90 font-heading text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Signature Egyptian Street Bowl
              </span>
            </div>

            {/* Main Headline - Bold, high-contrast, dual color exactly as in screenshot */}
            <h1
              id="hero-main-heading"
              className="font-display text-4xl sm:text-5xl xl:text-6xl font-black uppercase leading-[1.08] tracking-tight text-white mb-4"
            >
              <span className="text-amber-400 block sm:inline">AUTHENTIC EGYPTIAN</span>{' '}
              <span className="text-amber-400 block sm:inline">STREET FOOD.</span>{' '}
              <span className="text-red-500 block">FROM THE NILE TO TAMPA.</span>
            </h1>

            {/* Subheadline from user prompt */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mb-4">
              Experience centuries of Nile flavor—from signature <span className="text-amber-300 font-semibold">Koshary</span> and stone-baked <span className="text-amber-300 font-semibold">Hawawshi</span> to sizzling Egyptian <span className="text-amber-300 font-semibold">Shawarma</span> and emerald fava falafel.
            </p>

            {/* Address Line with interactive pin */}
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-address-link"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-amber-400 text-xs sm:text-sm font-medium tracking-wide mb-6 group transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-red-950/80 border border-red-700/60 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="underline decoration-amber-500/40 underline-offset-4 group-hover:decoration-amber-400">
                {STORE_INFO.address}
              </span>
            </a>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              {/* Primary CTA: EXPLORE MENU (Terracotta button matching screenshot) */}
              <button
                onClick={onExploreMenu}
                id="hero-cta-explore-menu"
                className="px-6 sm:px-7 py-3.5 rounded-lg bg-red-700 hover:bg-red-600 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-900/40 hover:shadow-red-800/60 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: BUILD YOUR CLASSIC / GET DIRECTIONS (Gold border) */}
              <button
                onClick={onGetDirections}
                id="hero-cta-directions"
                className="px-6 sm:px-7 py-3.5 rounded-lg border-2 border-amber-500/80 hover:border-amber-400 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Status Badge: 🇪🇬 100% Authentic Egyptian Recipes */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-amber-600/30 text-amber-200 text-xs font-semibold w-fit">
              <span className="text-base">🇪🇬</span>
              <span className="tracking-wide">100% Authentic Nile Recipes • Temple Terrace, Tampa</span>
            </div>
          </div>

          {/* Right Column: Authentic Egyptian Ceramic Bowl with Koshary & Flatbread */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            {/* Visual backdrop decorative glow & ceramic ring */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Decorative Aztec/Egyptian concentric glowing ring */}
              <div className="absolute -inset-4 rounded-full border border-amber-500/20 animate-pulse pointer-events-none"></div>
              <div className="absolute -inset-8 rounded-full border border-red-500/10 pointer-events-none"></div>

              {/* Main Bowl Presentation Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border-2 border-amber-600/30 group">
                <img
                  src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=85"
                  alt="Authentic Egyptian Koshary Bowl with crispy fried onions, lentils, chickpeas, and baladi bread"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient vignette for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

                {/* Floating dish caption banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-950/85 backdrop-blur-md rounded-xl p-3.5 border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <UtensilsCrossed className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-white font-display text-sm sm:text-base font-bold">
                        Cairo's #1 National Dish
                      </h2>
                      <p className="text-amber-200/75 text-xs">
                        Rice, lentils, pasta, spicy garlic salsa & crispy fried onions
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onOrderClick}
                    className="px-3 py-1.5 rounded-lg bg-amber-500 text-gray-950 font-heading text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors"
                  >
                    $11.99
                  </button>
                </div>
              </div>

              {/* Floating accent badge: Egyptian Baladi Bread */}
              <div className="absolute -top-4 -right-4 sm:top-4 sm:-right-6 bg-gradient-to-br from-amber-600 to-amber-700 text-gray-950 px-3.5 py-2 rounded-xl shadow-xl border border-amber-400/50 flex items-center gap-2 transform rotate-3">
                <Sparkles className="w-4 h-4 text-gray-950" />
                <span className="font-heading font-black text-xs uppercase tracking-wider">
                  Stone-Oven Fresh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
