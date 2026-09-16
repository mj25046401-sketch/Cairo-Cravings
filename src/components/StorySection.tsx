import React from 'react';
import { Flame, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-gray-900 text-white relative overflow-hidden border-t border-b border-amber-900/20">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-600/30">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Cairo Street Food Kitchen & Hearth"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              {/* Floating Testimonial/Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-gray-950/90 backdrop-blur-md p-4 rounded-xl border border-amber-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                    🇪🇬
                  </div>
                  <div>
                    <h4 className="text-white font-display text-sm font-bold">
                      “Nothing Like It In Florida”
                    </h4>
                    <p className="text-gray-300 text-xs mt-0.5">
                      “Finally, authentic Egyptian Koshary and Hawawshi in Tampa Bay that tastes just like the street stalls outside Tahrir Square.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Seal */}
            <div className="absolute -top-6 -left-6 hidden sm:flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-amber-500 text-gray-950 font-heading font-black shadow-xl rotate-[-6deg] border border-amber-300 p-2 text-center">
              <span className="text-[10px] uppercase tracking-wider">Tampa's</span>
              <span className="text-sm uppercase font-black leading-tight">#1 First</span>
              <span className="text-[9px] uppercase tracking-wider">Egyptian Spot</span>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-700/50 text-red-400 font-heading text-xs font-bold uppercase tracking-widest mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>Ancient Heritage • Modern Energy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
              From the Bustling Stalls of Cairo to <span className="text-amber-400">Temple Terrace</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              For decades, Tampa food lovers enjoyed Mediterranean kebabs and Levantine falafel—yet the vibrant, soulful culinary powerhouse of <strong className="text-amber-300">authentic Egyptian street food</strong> was missing.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              At <strong className="text-white">Cairo Cravings</strong>, we bridge the 6,000 miles between the Nile and Hillsborough County. No shortcuts, no Americanized substitutions:
            </p>

            {/* Core Authenticity Pillars */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">
                    Real Ta’ameya with Split Fava Beans
                  </h4>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Egyptians created falafel! We use 100% peeled fava beans, fresh garden dill, and leeks for that signature bright-green, fluffy interior.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">
                    Stone Hearth Baladi Flatbread
                  </h4>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Fresh whole wheat dough dusted with natural wheat bran (Radda) baked at blisteringly high heat for our signature Hawawshi pockets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">
                    The 6-Hour Spiced Tomato Salsa & Cumin Da’a
                  </h4>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Slow-simmered vine tomatoes, crushed garlic, white vinegar, roasted cumin, and fiery Shatta chili that make our Koshary legendary.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">
                    100% Halal Meats & High-Protein Vegetarian Staples
                  </h4>
                  <p className="text-gray-400 text-xs mt-0.5">
                    From our juicy beef Hawawshi to plant-powered Koshary bowls loaded with lentils and chickpeas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
