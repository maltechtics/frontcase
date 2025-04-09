
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

const FeaturedCarsSection = () => {
  const featuredCars = [
    {
      id: 1,
      title: '2022 Toyota Camry XLE',
      price: '₦18,500,000',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Leather Interior', 'Sunroof', 'Push Start', 'Reverse Camera']
    },
    {
      id: 2,
      title: '2021 Lexus RX 350',
      price: '₦32,000,000',
      image: 'https://images.unsplash.com/photo-1482605546645-4935da66d5b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Full Options', 'Heads Up Display', 'Panoramic Roof', '360° Camera']
    },
    {
      id: 3,
      title: '2021 Mercedes-Benz GLE 450',
      price: '₦45,000,000',
      image: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['AMG Package', 'Premium Sound', 'Massage Seats', 'Air Suspension']
    },
    {
      id: 4,
      title: '2020 Honda Accord Sport',
      price: '₦14,500,000',
      image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Sport Mode', 'Apple CarPlay', 'Smart Entry', 'Alloy Wheels']
    },
    {
      id: 5,
      title: '2022 BMW X5 xDrive40i',
      price: '₦52,000,000',
      image: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['M Sport Package', 'Executive Trim', 'Harman Kardon', 'Gesture Control']
    },
    {
      id: 6,
      title: '2019 Range Rover Velar',
      price: '₦35,000,000',
      image: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['HSE Trim', 'Meridian Sound', 'Adaptive Dynamics', 'InControl Touch Pro']
    }
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!scrollContainer.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
    const scrollAmount = clientWidth * 0.8;
    
    const newScrollLeft = direction === 'left' 
      ? Math.max(scrollLeft - scrollAmount, 0)
      : Math.min(scrollLeft + scrollAmount, scrollWidth - clientWidth);
    
    scrollContainer.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
    
    // Update arrow visibility after scroll animation completes
    setTimeout(() => {
      if (!scrollContainer.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }, 500);
  };

  return (
    <section id="featured-cars" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="section-title animated-element fade-in">Featured Cars</h2>
            <p className="section-subtitle animated-element fade-in" style={{ animationDelay: '0.2s' }}>
              Explore our collection of premium vehicles
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scrollCarousel('left')}
              className={`p-3 rounded-full border border-navy-200 transition-all duration-300 ${
                showLeftArrow 
                  ? 'opacity-100 bg-white hover:bg-navy-50' 
                  : 'opacity-50 cursor-not-allowed bg-gray-100'
              }`}
              disabled={!showLeftArrow}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-navy-700" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className={`p-3 rounded-full border border-navy-200 transition-all duration-300 ${
                showRightArrow 
                  ? 'opacity-100 bg-white hover:bg-navy-50' 
                  : 'opacity-50 cursor-not-allowed bg-gray-100'
              }`}
              disabled={!showRightArrow}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-navy-700" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollContainer}
            className="flex gap-6 overflow-x-auto py-4 scrollbar-none snap-x snap-mandatory"
            onScroll={() => {
              if (!scrollContainer.current) return;
              const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
              setShowLeftArrow(scrollLeft > 10);
              setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            }}
          >
            {featuredCars.map((car) => (
              <div 
                key={car.id}
                className="min-w-[300px] sm:min-w-[340px] flex-shrink-0 snap-start animated-element fade-in hover-scale"
                style={{ animationDelay: `${0.1 * car.id}s` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-navy-100 h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full font-medium text-sm">
                      {car.price}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-montserrat font-bold text-lg text-navy-900 mb-3">{car.title}</h3>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {car.features.map((feature, idx) => (
                          <span 
                            key={idx} 
                            className="bg-navy-50 text-navy-700 text-xs px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <button className="btn-primary py-2 text-sm">
                        View Details
                      </button>
                      <button className="p-2 bg-navy-50 text-navy-700 rounded hover:bg-navy-100 transition-colors">
                        <Info className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile navigation buttons */}
          <div className="flex justify-center mt-6 gap-2 md:hidden">
            <button 
              onClick={() => scrollCarousel('left')}
              className={`p-3 rounded-full border border-navy-200 transition-colors duration-300 ${
                showLeftArrow ? 'bg-white hover:bg-navy-50' : 'bg-gray-100 opacity-50 cursor-not-allowed'
              }`}
              disabled={!showLeftArrow}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-navy-700" />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className={`p-3 rounded-full border border-navy-200 transition-colors duration-300 ${
                showRightArrow ? 'bg-white hover:bg-navy-50' : 'bg-gray-100 opacity-50 cursor-not-allowed'
              }`}
              disabled={!showRightArrow}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-navy-700" />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary hover-scale animated-element fade-in" style={{ animationDelay: '0.6s' }}>
            Explore All Cars
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarsSection;
