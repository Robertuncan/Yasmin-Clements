import React, { useState } from 'react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '../data/businessData';
import { MessageCircle, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const handleBookClick = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.name);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
            Comprehensive Chimney Solutions
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Professional Services for Every Flue & Fireplace
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From routine soot sweeping and CCTV inspections to structural leak repairs and protective cowl installations, we keep your home safe, warm, and compliant.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All 12 Services
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('sweeping')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'sweeping'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Cleaning & Sweeping
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('repair')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'repair'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Repairs & Liners
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('inspection')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'inspection'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Inspection & Safety
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('maintenance')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'maintenance'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Maintenance & Caps
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service, index) => {
            const encodedService = encodeURIComponent(
              `Hello Yasmin Clements, I would like to enquire about your ${service.name} service.`
            );
            const serviceWaUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodedService}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono tabular-nums">
                    <span>0{index + 1}</span>
                    <span className="capitalize text-slate-500 font-sans">{service.category}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleBookClick(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors"
                    title={`Message about ${service.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom service banner */}
        <div className="mt-12 bg-blue-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-1">Unsure which chimney service you need?</h4>
            <p className="text-sm text-blue-100">
              Send us a photo or a quick description of your chimney or fireplace symptoms on WhatsApp.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
