'use client';
import React from 'react';
import Header from '@/app/components/landing/Header';
import HeroSection from '@/app/components/landing/HeroSection';
import ServicesSection from '@/app/components/landing/ServicesSection';
import BenefitsSection from '@/app/components/landing/BenefitsSection';
import WhyUsSection from '@/app/components/landing/WhyUsSection';
import TestimonialsSection from '@/app/components/landing/TestimonialsSection';
import CTASection from '@/app/components/landing/CTASection';
import Footer from '@/app/components/landing/Footer';
import WhatsAppButton from '@/app/components/landing/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <section id="beneficios">
          <BenefitsSection />
        </section>
        <WhyUsSection />
        <TestimonialsSection />
        <section id="contato">
          <CTASection />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}