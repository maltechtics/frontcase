
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationsSection = () => {
  const locations = [
    { city: 'Lagos', description: 'Our headquarters and main showroom' },
    { city: 'Abuja', description: 'Federal capital territory office' },
    { city: 'Port Harcourt', description: 'South-South regional center' },
    { city: 'Kano', description: 'Northern Nigeria operations' },
  ];

  return (
    <section id="locations" className="py-20 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title animated-element fade-in">Nationwide Coverage. West Africa Ready.</h2>
          <p className="section-subtitle animated-element fade-in" style={{ animationDelay: '0.2s' }}>
            From Lagos to Abuja, and beyond — we serve customers across Nigeria and the West African region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="animated-element slide-in-left">
            <div className="h-[400px] rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <iframe 
                title="Company Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.6410836102!2d3.1191255078125103!3d6.548376699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1712656462987!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col justify-center animated-element slide-in-right">
            <h3 className="font-montserrat font-bold text-2xl mb-6 text-navy-900">
              Our Strategic Locations
            </h3>
            
            <div className="space-y-4">
              {locations.map((location) => (
                <div 
                  key={location.city} 
                  className="flex p-4 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors duration-300"
                >
                  <div className="mr-4">
                    <div className="bg-navy-200 p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-navy-900" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-navy-900">{location.city}</h4>
                    <p className="text-navy-700">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <p className="text-navy-700 italic">
                *We offer nationwide delivery to all 36 states and FCT Abuja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
