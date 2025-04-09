
import React, { useEffect, useRef } from 'react';

const AnimationObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize intersection observer to trigger animations when elements enter the viewport
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElement = entry.target;
          
          // Add the appropriate animation class based on data attribute
          if (animatedElement.classList.contains('animated-element')) {
            if (animatedElement.classList.contains('fade-in')) {
              animatedElement.classList.add('animate-fade-in');
            } else if (animatedElement.classList.contains('slide-in-right')) {
              animatedElement.classList.add('animate-slide-in-right');
            } else if (animatedElement.classList.contains('slide-in-left')) {
              animatedElement.classList.add('animate-slide-in-left');
            } else if (animatedElement.classList.contains('zoom-in')) {
              animatedElement.classList.add('animate-zoom-in');
            }
          }
          
          // Stop observing the element after animation has been triggered
          observerRef.current?.unobserve(animatedElement);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    // Observe all animated elements
    document.querySelectorAll('.animated-element').forEach((element) => {
      observerRef.current?.observe(element);
    });

    // Cleanup observer on component unmount
    return () => observerRef.current?.disconnect();
  }, []);

  return null; // This component doesn't render anything
};

export default AnimationObserver;
