import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, ArrowDown } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

const HERO_IMAGE_PATH = "/src/assets/images/hero_chimney_services_1790802823421.jpg";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_PATH}
          alt="Traditional British brick chimney and residential roofline in Harrogate"
          className="w-full h-full object-cover object-center opacity-35"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Graceful fallback
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Local trust signal & business type */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-200 mb-4">
            <span className="text-white font-semibold">{BUSINESS_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span>{BUSINESS_INFO.businessType}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Harrogate & London</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
            {BUSINESS_INFO.tagline}
          </h1>

          {/* Short Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl">
            Professional chimney cleaning, sweeping, safety inspection, and repairs. We ensure your flues draw cleanly, blockages are cleared, and your household stays protected from fire and smoke risks.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            {/* Primary CTA */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all text-center whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Message on WhatsApp</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors text-center whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowDown className="w-4 h-4 text-slate-500" />
            </a>

            {/* Direct Call Button */}
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm sm:text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-slate-700 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Safety & Carbon Monoxide Checks</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <span>Dust-Free Containment Sheets</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <span>Direct Booking via WhatsApp</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
