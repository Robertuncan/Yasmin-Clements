import React from 'react';
import { Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div>
            <span className="text-xl font-bold text-white block mb-2">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-3">
              {BUSINESS_INFO.businessType}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {BUSINESS_INFO.tagline} Professional chimney cleaning, sweeping, inspection, and repairs.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#standards" className="hover:text-white transition-colors">Safety Standards</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Service Area</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Book or Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <span className="block text-xs text-slate-500">Phone Call:</span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="font-medium text-white hover:text-blue-300 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>

              <div>
                <span className="block text-xs text-slate-500">WhatsApp:</span>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 mt-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>+44 7915 925681</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="block text-xs text-slate-500">Service Scheduling:</span>
                <span className="text-xs text-slate-400">Appointments arranged daily</span>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Location
            </h4>
            <div className="text-sm text-slate-400 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-white transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Harrogate, London & Surrounding Regions</span>
            <span aria-hidden="true">·</span>
            <span>Clean Chimneys, Safer Homes</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
