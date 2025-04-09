
import React from 'react';
import { CheckCircle, Truck, BadgeDollarSign, HeadphonesIcon, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: 'Trusted & Transparent Deals',
      description: 'Full vehicle history and documentation with no hidden fees or charges.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery Nationwide',
      description: 'Quick vehicle delivery to all 36 states and FCT within days, not weeks.'
    },
    {
      icon: BadgeDollarSign,
      title: 'Best Prices Guaranteed',
      description: 'Competitive pricing with flexible payment options to suit your budget.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Customer Support',
      description: 'Always available to assist with your inquiries and ensure your satisfaction.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every vehicle undergoes rigorous inspection before delivery to customers.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-navy-900 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-white animated-element fade-in">
            Why Choose Front Case
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animated-element fade-in" style={{ animationDelay: '0.2s' }}>
            We've built our reputation on excellence, transparency, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title} 
              className="bg-navy-800/50 border border-navy-700 rounded-lg p-6 hover:bg-navy-800 transition-colors duration-300 animated-element fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-gold/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <reason.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-gold hover-scale animated-element fade-in" style={{ animationDelay: '0.6s' }}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
