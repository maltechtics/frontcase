
import React from 'react';
import { Car, Ship, Search, CreditCard, Truck, FileSpreadsheet } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: 'Car Sales',
      description: 'Premium foreign & Nigerian-used cars with full documentation and warranty options.'
    },
    {
      icon: Ship,
      title: 'Car Importation',
      description: 'Seamless importation of vehicles from USA, Europe, and Asia with all paperwork handled.'
    },
    {
      icon: Search,
      title: 'Car Sourcing',
      description: 'We find and acquire specific vehicles based on your exact requirements and preferences.'
    },
    {
      icon: CreditCard,
      title: 'Vehicle Financing',
      description: 'Flexible financing solutions to help you get your dream car with comfortable payment plans.'
    },
    {
      icon: Truck,
      title: 'Doorstep Delivery',
      description: 'Nationwide vehicle delivery to your location with secure logistics and tracking.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Auto Advisory',
      description: 'Expert consultation on vehicle selection, inspection, and maintenance recommendations.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animated-element fade-in">What We Do</h2>
          <p className="section-subtitle animated-element fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive automotive solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card p-6 hover-scale animated-element fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="bg-navy-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-navy-900" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-navy-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
