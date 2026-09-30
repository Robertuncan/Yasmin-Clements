import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
            Location & Service Coverage
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Serving Harrogate, London & Surrounding Communities
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Conveniently located at Princes Square, we provide scheduled domestic and commercial chimney sweeping, inspections, and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Address Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Operating Address</h3>
                  <p className="text-xs text-slate-500 font-mono">HG1 1ND · United Kingdom</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-6">
                <p className="text-sm sm:text-base font-semibold text-slate-800">
                  {BUSINESS_INFO.name} – {BUSINESS_INFO.businessType}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 mb-6">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Service Scheduling</span>
                    <span>Appointments arranged daily via WhatsApp or phone.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Coverage Area</span>
                    <span>Harrogate, North Yorkshire & London corridor.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors shadow-sm whitespace-nowrap"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Check Coverage for Your Postcode</span>
              </a>
            </div>
          </div>

          {/* Map Representation & Quick Direction Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-xs uppercase tracking-wider text-blue-300 font-semibold mb-2">
                Fast Direct Response
              </div>
              <h4 className="text-xl font-bold mb-4">
                Need a Chimney Sweep or Urgent Inspection?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you’ve just moved in, noticed smoke billowing into your room, or need seasonal maintenance before lighting your stove, we are ready to assist.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-blue-300" />
                    <span>Call Direct</span>
                  </span>
                  <span className="font-semibold text-white">{BUSINESS_INFO.phoneFormatted}</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-emerald-600/30 border border-emerald-500/40 hover:bg-emerald-600/40 transition-colors text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Instant WhatsApp</span>
                  </span>
                  <span className="font-semibold text-emerald-200">Open Chat</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex items-center justify-between">
              <span>9 Princes Square, HG1 1ND</span>
              <span>Prompt Service</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
