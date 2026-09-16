import React, { useState } from 'react';
import { Flame, Leaf, ShieldCheck, Plus, Sparkles, Info } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface FeaturedMenuProps {
  onAddToCart: (item: MenuItem) => void;
  onViewItem: (item: MenuItem) => void;
}

type CategoryKey = 'bowls' | 'sandwiches' | 'sides' | 'desserts';

interface CategoryTab {
  key: CategoryKey;
  label: string;
  count: number;
}

const CATEGORIES: CategoryTab[] = [
  { key: 'bowls', label: 'Signature Bowls & Koshary', count: 4 },
  { key: 'sandwiches', label: 'Street Sandwiches', count: 5 },
  { key: 'sides', label: 'Appetizers & Sides', count: 6 },
  { key: 'desserts', label: 'Desserts & Teas', count: 5 },
];

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onAddToCart, onViewItem }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('bowls');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'vegan' | 'halal' | 'spicy'>('all');

  // Filter items by category and optional dietary filter
  const filteredItems = MENU_ITEMS.filter((item) => {
    if (item.category !== activeCategory) return false;
    if (dietaryFilter === 'vegan' && !item.isVegan && !item.isVegetarian) return false;
    if (dietaryFilter === 'halal' && !item.isHalal) return false;
    if (dietaryFilter === 'spicy' && item.spiceLevel < 2) return false;
    return true;
  });

  return (
    <section id="menu" className="py-24 bg-gray-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-heading text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Street Menu</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            The Streets of Cairo, <span className="text-amber-400">Crafted Fresh</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Every dish is cooked to order using authentic Nile basin recipes, slow-simmered garlic tomato sauces, fragrant cumin da’a, and stone-baked Egyptian baladi breads.
          </p>
        </div>

        {/* Tabbed Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8" id="menu-category-tabs">
          {CATEGORIES.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                id={`tab-${tab.key}`}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 sm:px-6 py-3 rounded-xl font-heading text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500 text-gray-950 shadow-lg shadow-amber-500/25 scale-102'
                    : 'bg-gray-900/90 text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-800'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Secondary Dietary Quick Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-xs font-heading uppercase tracking-wider">
          <span className="text-gray-400 mr-1 text-xs">Filter by:</span>
          <button
            onClick={() => setDietaryFilter('all')}
            className={`px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
              dietaryFilter === 'all'
                ? 'bg-red-700 text-white font-bold'
                : 'bg-gray-900 text-gray-400 hover:text-gray-200'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setDietaryFilter('vegan')}
            className={`px-3 py-1.5 rounded-full inline-flex items-center gap-1 transition-colors cursor-pointer ${
              dietaryFilter === 'vegan'
                ? 'bg-green-700 text-white font-bold'
                : 'bg-gray-900 text-gray-400 hover:text-gray-200'
            }`}
          >
            <Leaf className="w-3 h-3 text-green-400" />
            <span>Vegan / Vegetarian</span>
          </button>
          <button
            onClick={() => setDietaryFilter('halal')}
            className={`px-3 py-1.5 rounded-full inline-flex items-center gap-1 transition-colors cursor-pointer ${
              dietaryFilter === 'halal'
                ? 'bg-amber-600 text-gray-950 font-bold'
                : 'bg-gray-900 text-gray-400 hover:text-gray-200'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>100% Halal</span>
          </button>
          <button
            onClick={() => setDietaryFilter('spicy')}
            className={`px-3 py-1.5 rounded-full inline-flex items-center gap-1 transition-colors cursor-pointer ${
              dietaryFilter === 'spicy'
                ? 'bg-red-900 text-red-200 font-bold'
                : 'bg-gray-900 text-gray-400 hover:text-gray-200'
            }`}
          >
            <Flame className="w-3 h-3 text-red-500" />
            <span>Spicy Shatta</span>
          </button>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`menu-item-${item.id}`}
              className="bg-gray-900/80 rounded-2xl border border-gray-800 hover:border-amber-500/40 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-950/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.isSignature && (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-heading font-black uppercase tracking-wider bg-amber-500 text-gray-950 shadow">
                        Signature
                      </span>
                    )}
                    {item.isVegan && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-heading font-bold uppercase tracking-wider bg-green-900/90 text-green-300 border border-green-700/50 flex items-center gap-1">
                        <Leaf className="w-2.5 h-2.5" />
                        Vegan
                      </span>
                    )}
                    {item.isVegetarian && !item.isVegan && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-heading font-bold uppercase tracking-wider bg-emerald-900/90 text-emerald-300 border border-emerald-700/50 flex items-center gap-1">
                        <Leaf className="w-2.5 h-2.5" />
                        Vegetarian
                      </span>
                    )}
                    {item.isHalal && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-heading font-bold uppercase tracking-wider bg-amber-950/90 text-amber-300 border border-amber-700/50 flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5" />
                        Halal
                      </span>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-gray-950/90 border border-amber-500/40 text-amber-400 font-heading font-bold text-sm">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Arabic Name & Spice Tag */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    {item.arabicName && (
                      <span className="text-xs text-amber-400/80 font-serif font-medium">
                        {item.arabicName}
                      </span>
                    )}

                    {/* Spice Level Indicator */}
                    {item.spiceLevel > 0 && (
                      <div
                        className="flex items-center gap-0.5 text-red-400 text-xs"
                        title={`Spice Level: ${item.spiceLevel}/3`}
                      >
                        {[...Array(item.spiceLevel)].map((_, i) => (
                          <Flame key={i} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Item Title */}
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Ingredients Pill List */}
                  {item.ingredients && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.ingredients.slice(0, 3).map((ing, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-gray-800/80 text-[11px] text-gray-300"
                        >
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[11px] text-gray-400">
                          +{item.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-gray-800/50 mt-2">
                <button
                  onClick={() => onViewItem(item)}
                  className="text-xs font-heading font-semibold text-gray-400 hover:text-amber-400 flex items-center gap-1 transition-colors cursor-pointer py-2"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Story & Details</span>
                </button>

                <button
                  onClick={() => onAddToCart(item)}
                  id={`add-to-cart-${item.id}`}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow hover:shadow-amber-500/30"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-gray-900/40 rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-sm">No items found matching the selected filter.</p>
            <button
              onClick={() => setDietaryFilter('all')}
              className="mt-3 px-4 py-2 rounded-lg bg-amber-500 text-gray-950 text-xs font-bold uppercase font-heading"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
