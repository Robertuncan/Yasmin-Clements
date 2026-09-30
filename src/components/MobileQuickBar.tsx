import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-slate-800 bg-slate-100 active:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-blue-900" />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-emerald-600 active:bg-emerald-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
