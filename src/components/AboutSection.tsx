import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title animated-element fade-in">Driven by Excellence</h2>
            <p className="text-lg text-navy-700 mb-6 animated-element fade-in" style={{ animationDelay: '0.2s' }}>
              Front Case Nigeria Limited was founded by a passionate entrepreneur with a drive for excellence in the automotive space. We combine speed, trust, and premium service to deliver unbeatable car deals across Nigeria.
            </p>
            <p className="text-lg text-navy-700 mb-6 animated-element fade-in" style={{ animationDelay: '0.3s' }}>
              Our mission is simple: connect our clients with their dream cars through a hassle-free, transparent, and personalized car-buying experience.
            </p>
            <p className="text-lg font-bold text-teal-600 animated-element fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="text-teal-800">Maltectics Services and Solutions</span> proudly contributes to the creation and delivery of premium car services, enhancing every aspect of our operation with a focus on technology, trust, and integrity.
            </p>
            <div className="flex flex-wrap gap-4 animated-element fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-navy-100 rounded-lg p-4 text-center">
                <p className="font-montserrat font-bold text-3xl text-navy-900">500+</p>
                <p className="text-navy-700">Cars Delivered</p>
              </div>
              <div className="bg-navy-100 rounded-lg p-4 text-center">
                <p className="font-montserrat font-bold text-3xl text-navy-900">95%</p>
                <p className="text-navy-700">Client Satisfaction</p>
              </div>
              <div className="bg-navy-100 rounded-lg p-4 text-center">
                <p className="font-montserrat font-bold text-3xl text-navy-900">10+</p>
                <p className="text-navy-700">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative animated-element zoom-in">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Premium cars" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-medium text-xl">Creating automotive joy since 2013</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-gold text-white p-4 rounded-lg shadow-lg">
              <p className="font-montserrat font-bold text-2xl">Premium Service</p>
              <p>Excellence in every detail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
