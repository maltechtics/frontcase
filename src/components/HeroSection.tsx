
import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: '50% 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6 text-shadow-lg animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Drive Your Dream.
            <br />
            <span className="text-gold">Trusted Cars.</span> Fast Delivery. <span className="text-gold">Real Value.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            Nigeria's trusted source for premium foreign & Nigerian-used cars.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <a href="#featured-cars" className="btn-gold hover-scale">
              Explore Cars <ChevronRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="btn-secondary hover-scale">
              <Phone className="h-5 w-5" /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
