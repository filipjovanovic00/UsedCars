import React, { useState, useEffect } from 'react';
import '../style/style.css'

export default function Backtotop(){
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

