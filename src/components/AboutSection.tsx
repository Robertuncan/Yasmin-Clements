import React from 'react';
import { ShieldCheck, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

const HEARTH_IMAGE_PATH = "/src/assets/images/chimney_hearth_care_1790802842372.jpg";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 aspect-4/3">
              <img
                src={HEARTH_IMAGE_PATH}
                alt="Well-maintained stone fireplace hearth and clean flue"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-5 text-white">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">Hearth & Flue Care</p>
                <p className="text-sm font-medium text-slate-100">Clean workmanship and reliable safety for every home.</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3 text-xs sm:text-sm text-slate-700">
              <MapPin className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Based at 9 Princes Square, Harrogate (HG1 1ND)</span>
            </div>
          </div>

          {/* Right Column: Editorial About Copy */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
              About Yasmin Clements
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Dedicated Chimney Care & Household Fire Safety
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                At <span className="font-semibold text-slate-900">Yasmin Clements</span>, we believe that a fireplace should bring warmth and peace of mind, not hidden hazards. Creosote buildup, deteriorating mortar, birds' nests, and undetected flue cracks can quickly compromise your chimney's performance.
              </p>
              <p>
                We specialize in comprehensive chimney servicing—from periodic sweeps and smoke draw checks to essential repairs, cap installations, and leak prevention. Our goal is straightforward: <span className="text-slate-900 font-medium">Clean Chimneys, Safer Homes.</span>
              </p>
            </div>

            {/* Practical commitments */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Soot-Free Interior</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Heavy industrial protective sheeting protects your carpets and hearth.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Safety First</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Every sweep includes careful observation of flue integrity and draught.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Full Spectrum Services</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Cleaning, repairs, liners, caps, and weatherproofing under one roof.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Direct Contact</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Reach Yasmin directly via phone or WhatsApp for quick advice.</p>
                </div>
              </div>
            </div>

            {/* Quick action button */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors shadow-sm"
              >
                <span>Speak with Yasmin</span>
              </a>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="text-sm font-medium text-slate-700 hover:text-blue-900 transition-colors"
              >
                Call: {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
