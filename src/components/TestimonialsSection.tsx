
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adebayo J.",
      location: "Lagos",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Front Case delivered my Toyota Camry in perfect condition and even faster than promised. Their follow-up service has been exceptional. I'll definitely use them again for my next car purchase."
    },
    {
      id: 2,
      name: "Chioma N.",
      location: "Abuja",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "As a first-time car buyer, I was nervous about the process. The team at Front Case guided me through every step and found me the perfect car within my budget. Highly recommended!"
    },
    {
      id: 3,
      name: "Emeka O.",
      location: "Port Harcourt",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      text: "I've purchased three cars through Front Case over the last five years. Their consistent quality and transparency keeps me coming back. Their nationwide delivery service is a game-changer."
    },
    {
      id: 4,
      name: "Fatima M.",
      location: "Kano",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      text: "Front Case helped me source a specific Mercedes model that was difficult to find in Nigeria. They handled the importation seamlessly and delivered it to my doorstep in Kano. Excellent service!"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Auto advance testimonials
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Reset animation state after animation completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600); // Match your animation duration

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title animated-element fade-in">What Our Customers Say</h2>
          <p className="section-subtitle animated-element fade-in" style={{ animationDelay: '0.2s' }}>
            Don't just take our word for it—hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] sm:h-[350px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 z-0 ' + 
                      (direction === 'right' ? 'translate-x-full' : '-translate-x-full')
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 h-full">
                  <div className="flex flex-col sm:flex-row gap-6 h-full">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-gold">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-gold rounded-full p-2">
                          <Quote className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between flex-grow">
                      <p className="text-navy-700 mb-4 italic">{testimonial.text}</p>
                      
                      <div>
                        <h4 className="font-montserrat font-bold text-lg text-navy-900">{testimonial.name}</h4>
                        <p className="text-navy-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-2">
            <button 
              onClick={handlePrev} 
              className="bg-white border border-navy-200 hover:bg-navy-50 p-2 rounded-full transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-navy-700" />
            </button>
            
            <div className="flex items-center gap-2 mx-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setDirection(index > activeIndex ? 'right' : 'left');
                    setIsAnimating(true);
                    setActiveIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-gold w-6' : 'bg-navy-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext} 
              className="bg-white border border-navy-200 hover:bg-navy-50 p-2 rounded-full transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-navy-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
