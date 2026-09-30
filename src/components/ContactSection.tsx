import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    service: selectedService || 'Chimney Sweeping',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Yasmin Clements,\n\nName: ${formData.name || 'Customer'}\nPhone: ${formData.phone || 'Not provided'}\nPostcode: ${formData.postcode || 'Not provided'}\nRequested Service: ${formData.service}\nNotes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Book an Inspection or Request a Chimney Quote
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Message Yasmin directly on WhatsApp for the fastest reply, call us directly, or complete the quick request form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Banner */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Direct WhatsApp Chat</h3>
                  <p className="text-xs text-emerald-800">Fastest way to get a quote or book</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-5 leading-relaxed">
                You can easily send photos of your chimney stack, fireplace, or leak symptoms for an immediate assessment.
              </p>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Telephone Inquiries</h3>
                  <p className="text-xs text-slate-500">Speak directly with Yasmin</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Available for urgent service calls, schedule inquiries, and chimney troubleshooting advice.
              </p>
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-900" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Address Info */}
            <div className="p-5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 block">{BUSINESS_INFO.name}</span>
                <span>{BUSINESS_INFO.address}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Send a Booking or Quote Request
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Fill in your details and we will respond promptly with availability and pricing.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Thank You for Your Request!
                </h4>
                <p className="text-sm text-slate-700 mb-5 max-w-md mx-auto">
                  We have received your enquiry for <strong className="text-slate-900">{formData.service}</strong>. Yasmin will review and respond shortly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. 07912 345678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-slate-700 mb-1">
                      Required Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="postcode" className="block text-xs font-medium text-slate-700 mb-1">
                      Postcode / Location
                    </label>
                    <input
                      id="postcode"
                      type="text"
                      placeholder="e.g. HG1, HG2 or London"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-medium text-slate-700 mb-1">
                    Details / Appliance Type (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="e.g. Open fireplace, wood burning stove, soot smell, or leak during heavy rain..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Send Directly via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
