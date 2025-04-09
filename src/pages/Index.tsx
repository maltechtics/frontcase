
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import LocationsSection from '@/components/LocationsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeaturedCarsSection from '@/components/FeaturedCarsSection';
import HowToBuySection from '@/components/HowToBuySection';
import FooterSection from '@/components/FooterSection';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import AnimationObserver from '@/components/AnimationObserver';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Front Case Nigeria Limited | Premium Car Sales";
  }, []);

  return (
    <div className="min-h-screen">
      <AnimationObserver />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LocationsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FeaturedCarsSection />
      <HowToBuySection />
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
