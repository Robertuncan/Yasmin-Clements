import React from 'react';
import { TRUST_POINTS, BUSINESS_INFO } from '../data/businessData';
import { Shield, Sparkles, Layers, MessageSquare } from 'lucide-react';

const icons = [Shield, Sparkles, Layers, MessageSquare];

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
            Why Choose Yasmin Clements
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Reliable Chimney Care Rooted in Safety & Respect
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We treat your home and heating system with the care they deserve, ensuring transparent communication and thorough workmanship on every visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point.title}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
