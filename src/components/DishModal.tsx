import React from 'react';
import { X, Flame, Leaf, ShieldCheck, Plus, Sparkles, Utensils } from 'lucide-react';
import { ClassicSpotlight, MenuItem } from '../types';

interface DishModalProps {
  item: ClassicSpotlight | MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: ClassicSpotlight | MenuItem) => void;
}

export const DishModal: React.FC<DishModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const isClassic = 'shortDesc' in item;
  const title = item.name || (item as ClassicSpotlight).title;
  const arabicName = item.arabicName || (item as ClassicSpotlight).subtitle;
  const description = (item as ClassicSpotlight).fullDesc || item.description;
  const ingredients = (item as ClassicSpotlight).keyIngredients || item.ingredients || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-gray-900 border border-amber-600/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-gray-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img src={item.image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>

          {/* Badges on image */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              {arabicName && (
                <span className="text-sm font-serif font-bold text-amber-400 block drop-shadow">
                  {arabicName}
                </span>
              )}
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-white drop-shadow-md">
                {title}
              </h2>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-gray-950 font-heading font-black text-base shadow-lg">
              {item.price}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Dietary & Spice Pill Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {isClassic && (
              <span className="px-3 py-1 rounded-md text-xs font-heading font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {(item as ClassicSpotlight).badge}
              </span>
            )}
            {item.isVegan && (
              <span className="px-3 py-1 rounded-md text-xs font-heading font-bold uppercase bg-green-950 text-green-300 border border-green-700/50 flex items-center gap-1">
                <Leaf className="w-3 h-3" />
                100% Vegan
              </span>
            )}
            {item.isHalal && (
              <span className="px-3 py-1 rounded-md text-xs font-heading font-bold uppercase bg-amber-950 text-amber-300 border border-amber-700/50 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                100% Halal
              </span>
            )}
            {item.spiceLevel > 0 && (
              <span className="px-3 py-1 rounded-md text-xs font-heading font-bold uppercase bg-red-950 text-red-300 border border-red-700/50 flex items-center gap-1">
                <Flame className="w-3 h-3 text-red-500" />
                Spice Level: {item.spiceLevel}/3
              </span>
            )}
          </div>

          {/* Authentic Description */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              Authentic Egyptian Recipe & Flavor Profile
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Key Ingredients */}
          {ingredients.length > 0 && (
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
                Key Fresh Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-gray-800 text-xs text-gray-200 border border-gray-700/60"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pairing Recommendation */}
          {item.pairing && (
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-600/30 flex items-center gap-3">
              <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
              <p className="text-xs text-amber-200">
                <strong className="font-bold uppercase tracking-wide">Recommended Pairing:</strong>{' '}
                {item.pairing}
              </p>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Back to Menu
            </button>
            <button
              onClick={() => {
                onAddToCart(item);
                onClose();
              }}
              className="flex-1 max-w-xs px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-heading font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Order • {item.price}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
