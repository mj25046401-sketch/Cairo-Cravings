import React from 'react';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { CLASSICS_SPOTLIGHT } from '../data';
import { ClassicSpotlight } from '../types';

interface ClassicsSpotlightProps {
  onSelectDish: (dish: ClassicSpotlight) => void;
  onOrderDish: (dish: ClassicSpotlight) => void;
}

export const ClassicsSpotlight: React.FC<ClassicsSpotlightProps> = ({
  onSelectDish,
  onOrderDish,
}) => {
  return (
    <section
      id="classics"
      className="relative -mt-16 sm:-mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Warm Sand Container matching the screenshot's signature bottom banner card */}
      <div className="bg-[#FFFDF5] text-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-amber-500/20 p-6 sm:p-8 lg:p-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-amber-900/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-700 font-heading text-xs font-bold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ancient Nile Heritage Meets Street Kitchen</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 uppercase tracking-tight">
              Egyptian Classics Spotlight
            </h2>
            <p className="text-gray-600 text-sm mt-1 max-w-2xl">
              Authentic family recipes straight from Cairo and Alexandria. Handcrafted with imported Nile spices and baked in our stone hearth daily.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-100/70 px-4 py-2 rounded-full border border-amber-200">
            <span>🇪🇬 Made with Authentic Egyptian Fava Beans & Spices</span>
          </div>
        </div>

        {/* 4 Feature Cards Grid matching screenshot layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSICS_SPOTLIGHT.map((dish) => (
            <div
              key={dish.id}
              id={`classic-card-${dish.id}`}
              className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl border border-amber-900/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[11px] font-heading font-black tracking-wide uppercase bg-gray-950/85 text-amber-400 border border-amber-500/30">
                    {dish.badge}
                  </span>
                  {/* Price pill */}
                  <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md text-xs font-heading font-bold bg-amber-500 text-gray-950 shadow-md">
                    {dish.price}
                  </span>
                </div>

                {/* Arabic Subtitle */}
                <span className="text-[11px] font-semibold text-amber-800 block mb-1 font-serif">
                  {dish.subtitle}
                </span>

                {/* Dish Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-gray-900 tracking-wide uppercase group-hover:text-amber-700 transition-colors">
                  {dish.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-600 text-xs sm:text-sm mt-1.5 line-clamp-3 leading-relaxed">
                  {dish.shortDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectDish(dish)}
                  id={`view-details-${dish.id}`}
                  className="font-heading text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-900 inline-flex items-center gap-1 group/btn cursor-pointer py-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOrderDish(dish)}
                  id={`order-btn-${dish.id}`}
                  className="px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white font-heading text-xs font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
