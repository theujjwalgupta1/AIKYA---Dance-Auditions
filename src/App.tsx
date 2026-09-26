import React, { useState } from 'react';
import { BackgroundStage } from './components/BackgroundStage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GoogleFormEmbed } from './components/GoogleFormEmbed';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdWWWt72zYT0JtDVr6MlXHGBjFK4LKCtoJWyJRGZBASk8FKhw/viewform?embedded=true';

export default function App() {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const scrollToForm = () => {
    const el = document.getElementById('audition-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-neutral-100 flex flex-col selection:bg-white selection:text-black">
      {/* Background Stage with photos and subtle smoke effect */}
      <BackgroundStage
        activeMediaIndex={activeMediaIndex}
        onSelectMedia={setActiveMediaIndex}
      />

      {/* Main Page Layout Content (Z-indexed above fixed background) */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Navigation Top Bar */}
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <Hero onRegisterClick={scrollToForm} />

          {/* Central Embedded Google Form (sole application path) */}
          <GoogleFormEmbed embedUrl={GOOGLE_FORM_EMBED_URL} />

          {/* Audition FAQs */}
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

