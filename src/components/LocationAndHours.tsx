import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data';

interface LocationAndHoursProps {
  onCopyAddressToast: () => void;
}

export const LocationAndHours: React.FC<LocationAndHoursProps> = ({ onCopyAddressToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopied(true);
    onCopyAddressToast();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-gray-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-heading text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Visit Our Kitchen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Find Us in <span className="text-amber-400">Temple Terrace</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Conveniently located in Temple Terrace, minutes away from the University of South Florida (USF) Tampa campus. Dine in, take out, or order online.
          </p>
        </div>

        {/* Two Column Layout: Store Info & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Store Details & Operating Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="bg-gray-900/90 rounded-2xl p-6 sm:p-7 border border-gray-800 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-700/50 flex items-center justify-center text-red-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                    Restaurant Address
                  </h3>
                  <p className="text-amber-200/90 text-sm sm:text-base font-medium mt-1 leading-snug">
                    {STORE_INFO.address}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Temple Terrace Plaza • Tampa Bay Area
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <a
                      href={STORE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>
                    <button
                      onClick={handleCopyAddress}
                      className="px-3.5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 font-heading text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-gray-700"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Direct Call Card */}
            <div className="bg-gray-900/90 rounded-2xl p-6 sm:p-7 border border-gray-800 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/50 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                    Direct Phone Line
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Call for takeout orders, catering inquiries, or questions
                  </p>
                  <a
                    href={STORE_INFO.phoneRaw}
                    id="phone-click-to-call"
                    className="inline-flex items-center gap-2 text-xl sm:text-2xl font-black font-heading text-amber-400 hover:text-amber-300 transition-colors mt-2"
                  >
                    <span>{STORE_INFO.phone}</span>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-gray-900/90 rounded-2xl p-6 sm:p-7 border border-gray-800 shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                      Operating Hours
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs text-green-400 font-semibold mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                      <span>Open Today for Lunch & Dinner</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {STORE_INFO.hours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 border-b border-gray-800 text-xs sm:text-sm"
                    >
                      <span className="text-gray-300 font-medium">{schedule.days}</span>
                      <span className="text-amber-300 font-bold font-heading">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 text-[11px] text-gray-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Friday & Saturday late night Egyptian street cravings until Midnight!</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Google Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[420px] rounded-2xl overflow-hidden border-2 border-amber-600/30 shadow-2xl relative">
            <iframe
              title="Cairo Cravings Location Map"
              src={STORE_INFO.embedMapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105 brightness-95"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-gray-950/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-amber-500/30 shadow-lg pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                  Cairo Cravings • Temple Terrace
                </span>
              </div>
              <span className="text-[10px] text-gray-300 block mt-0.5">
                11009 N 56th St, Temple Terrace, FL 33617
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
