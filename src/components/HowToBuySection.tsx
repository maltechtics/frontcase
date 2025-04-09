
import React from 'react';
import { SearchIcon, CreditCard, Truck } from 'lucide-react';

const HowToBuySection = () => {
  const steps = [
    {
      icon: SearchIcon,
      title: 'Browse Our Inventory',
      description: 'Explore our collection or request a specific vehicle that meets your needs.',
      color: 'bg-blue-500'
    },
    {
      icon: CreditCard,
      title: 'Secure Your Purchase',
      description: 'Make a payment or apply for our flexible financing options.',
      color: 'bg-gold'
    },
    {
      icon: Truck,
      title: 'Receive Your Car',
      description: 'We deliver your vehicle directly to your doorstep, wherever you are in Nigeria.',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-navy-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animated-element fade-in">Your Car, In 3 Easy Steps</h2>
          <p className="section-subtitle animated-element fade-in" style={{ animationDelay: '0.2s' }}>
            We've simplified the car buying process to make it seamless for you
          </p>
        </div>

        <div className="relative">
          {/* Timeline Connector (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-navy-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="flex flex-col items-center text-center animated-element zoom-in"
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white mb-6 relative shadow-lg`}>
                  <step.icon className="h-8 w-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-navy-900 font-bold border-2 border-navy-200">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="font-montserrat font-bold text-xl text-navy-900 mb-3">{step.title}</h3>
                <p className="text-navy-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-navy-700 mb-6 animated-element fade-in">
            Have questions about the process? Our team is ready to guide you every step of the way.
          </p>
          <a href="#contact" className="btn-primary hover-scale animated-element fade-in" style={{ animationDelay: '0.6s' }}>
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
