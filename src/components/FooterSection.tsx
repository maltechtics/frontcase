
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-navy-900 text-white pt-16 pb-6">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-6">FRONT CASE</h3>
            <p className="text-white/80 mb-6">
              Nigeria's trusted source for premium foreign & Nigerian-used cars. We deliver excellence with every vehicle.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/2348000000000" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9172 19.7682 9.87559 19.3581 8.90668C18.948 7.93776 18.3505 7.06048 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65515 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.50769 10.8372C5.77364 9.24545 6.6008 7.81015 7.83144 6.80322C9.06207 5.79628 10.6146 5.28765 12.2223 5.37368C13.83 5.4597 15.3228 6.13441 16.44 7.26999C17.016 7.83562 17.4753 8.51738 17.794 9.27307C18.1126 10.0288 18.2829 10.8403 18.295 11.66C18.2782 13.3793 17.6004 15.0261 16.3918 16.2263C15.1832 17.4266 13.5314 18.0929 11.812 18.1H11.817L12 18.53ZM15.35 13.36C15.1993 13.2813 14.0993 12.74 13.9593 12.69C13.8193 12.64 13.7193 12.61 13.6193 12.76C13.5193 12.91 13.0993 13.42 13.0093 13.53C12.9193 13.64 12.8293 13.65 12.6793 13.56C12.5293 13.47 11.8293 13.25 10.9993 12.52C10.3493 11.95 9.91929 11.25 9.82929 11.09C9.73929 10.94 9.81929 10.85 9.90929 10.77C9.98929 10.7 10.0893 10.58 10.1693 10.49C10.2493 10.4 10.2793 10.33 10.3293 10.23C10.3793 10.13 10.3493 10.04 10.3093 9.96C10.2693 9.88 9.84929 8.78 9.71929 8.47C9.58929 8.17 9.45929 8.21 9.35929 8.2C9.26929 8.2 9.16929 8.2 9.06929 8.2C8.96929 8.2 8.79929 8.24 8.65929 8.39C8.51929 8.54 7.94929 9.09 7.94929 10.19C7.94929 11.29 8.74929 12.35 8.84929 12.45C8.94929 12.55 9.91929 14.11 11.4593 14.69C11.8493 14.85 12.1593 14.95 12.3993 15.03C12.7993 15.16 13.1693 15.14 13.4593 15.1C13.7893 15.05 14.6993 14.56 14.8293 14.17C14.9593 13.78 14.9593 13.45 14.9193 13.39C14.8793 13.33 14.7793 13.3 14.6293 13.25L15.35 13.36Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-gold" />
                <div>
                  <p className="text-white/80">Sales Hotline</p>
                  <a href="tel:+2348012345678" className="hover:text-gold transition-colors">+234 801 234 5678</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-gold" />
                <div>
                  <p className="text-white/80">Email Us</p>
                  <a href="mailto:info@frontcase.ng" className="hover:text-gold transition-colors">info@frontcase.ng</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gold" />
                <div>
                  <p className="text-white/80">Headquarters</p>
                  <p>Victoria Island, Lagos, Nigeria</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#featured-cars" className="hover:text-gold transition-colors">Featured Cars</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#how-to-buy" className="hover:text-gold transition-colors">How to Buy</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-6">Subscribe</h3>
            <p className="text-white/80 mb-4">
              Stay updated with our latest arrivals and special offers
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-navy-800 border border-navy-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button 
                type="submit" 
                className="bg-gold hover:bg-amber-500 transition-colors duration-300 text-white px-4 rounded-r-md flex items-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Front Case Nigeria Limited. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-white/60">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
