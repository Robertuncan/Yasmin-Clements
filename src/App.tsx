/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TrustSection } from './components/TrustSection';
import { ReassuranceSection } from './components/ReassuranceSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Chimney Sweeping');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col">
      {/* 3-Zone Top Navigation Bar */}
      <Header onSelectService={handleSelectService} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Services (All 12 services with filter and WhatsApp action) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. About Yasmin Clements */}
        <AboutSection />

        {/* 4. Trust / Why Choose Us */}
        <TrustSection />

        {/* 5. Credibility / Safety Standards Reassurance */}
        <ReassuranceSection />

        {/* 6. Location / Service Area */}
        <LocationSection />

        {/* 7. Contact / Action Form & WhatsApp CTA */}
        <ContactSection selectedService={selectedService} />

        {/* 8. Common FAQs */}
        <FaqSection />
      </main>

      {/* 9. Clean Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />
    </div>
  );
}
