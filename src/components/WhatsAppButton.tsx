import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 1000);
      // Hide tooltip after 3 seconds
      setTimeout(() => setShowTooltip(false), 4000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-12 sm:bottom-16 right-0 bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap animate-bounce">
            ¡Haz tu pedido aquí! 🍩
            <div className="absolute top-full right-3 sm:right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
          </div>
        )}

        <a
          href="https://wa.me/528129716337?text=¡Hola%20Algo%20Dulce!%20Me%20gustaría%20hacer%20un%20pedido%20😊🍩"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover:animate-pulse" />
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
        </a>
      </div>

      {/* Pulsing Ring Animation */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-400 animate-ping opacity-30" />
      </div>
    </>
  );
}