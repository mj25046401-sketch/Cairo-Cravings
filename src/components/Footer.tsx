import React from 'react';
import { MapPin, Phone, Mail, Instagram, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black text-gray-400 border-t border-amber-900/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-900">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-gray-950 rounded-[7px] flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-amber-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <polygon points="12 2 2 20 22 20" stroke="currentColor" fill="rgba(217, 119, 6, 0.2)" />
                    <line x1="12" y1="2" x2="12" y2="20" stroke="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-xl font-black tracking-wide text-white">
                Cairo Cravings
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Tampa’s premier destination for authentic Egyptian street food. Centuries of Nile tradition, stone-baked Hawawshi, signature Koshary, and crisp fava falafel.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-amber-400 text-xs font-semibold border border-gray-800 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{STORE_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#classics" className="hover:text-amber-400 transition-colors">
                  Egyptian Classics Spotlight
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Signature Koshary & Bowls
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Stone-Baked Hawawshi
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-400 transition-colors">
                  Our Nile Heritage
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours Summary */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kitchen Hours
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex justify-between border-b border-gray-900 pb-1.5">
                <span className="text-gray-400">Mon – Thu</span>
                <span className="text-amber-300 font-semibold font-heading">11am – 10pm</span>
              </li>
              <li className="flex justify-between border-b border-gray-900 pb-1.5">
                <span className="text-gray-400">Fri – Sat</span>
                <span className="text-amber-300 font-semibold font-heading">11am – Midnight</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="text-gray-400">Sunday</span>
                <span className="text-amber-300 font-semibold font-heading">12pm – 9pm</span>
              </li>
            </ul>
            <p className="text-[11px] text-amber-500/80 mt-3">
              * Late Night Egyptian Street Kitchen every Friday & Saturday!
            </p>
          </div>

          {/* Col 4: Contact & Inquiries */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Store & Catering
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-300">{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={STORE_INFO.phoneRaw} className="text-gray-300 hover:text-amber-400 font-bold">
                  {STORE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="text-gray-300 hover:text-amber-400">
                  {STORE_INFO.email}
                </a>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-gray-950 border border-amber-900/30">
              <span className="text-xs font-bold text-amber-400 block font-heading uppercase tracking-wide">
                Catering Available
              </span>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Koshary trays, Hawawshi platters & falafel bars for events, USF campus, & parties.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Cairo Cravings. All Rights Reserved. Tampa’s Authentic Egyptian Street Food.
          </p>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-gray-400">
              Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Egyptian street food lovers
            </span>

            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="w-8 h-8 rounded-lg bg-gray-900 hover:bg-gray-800 text-amber-400 flex items-center justify-center transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
