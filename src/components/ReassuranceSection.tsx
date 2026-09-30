import React from 'react';
import { REASSURANCE_STANDARDS, BUSINESS_INFO } from '../data/businessData';
import { ShieldCheck, Wind, Sparkles, Eye, CheckCircle2 } from 'lucide-react';

const standardIcons = [Wind, Sparkles, Eye, CheckCircle2];

export const ReassuranceSection: React.FC = () => {
  return (
    <section id="standards" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
            Service Credibility & Standards
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Our Commitment to Quality & Household Safety
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every chimney sweep and maintenance visit adheres to strict safety practices. We inspect thoroughly, clean cleanly, and give you honest, actionable advice about your fireplace.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {REASSURANCE_STANDARDS.map((item, index) => {
            const Icon = standardIcons[index % standardIcons.length];
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout Card */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                Clean Hearth & Home Reassurance
              </h4>
              <p className="text-sm text-slate-700 max-w-2xl leading-relaxed">
                We respect your living space. Dust sheets and industrial containment equipment are placed before any sweep starts. No stray soot, no mess left behind.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Ask a Question</span>
          </a>
        </div>

      </div>
    </section>
  );
};
