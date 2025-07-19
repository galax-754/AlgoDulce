import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  const scrollToGallery = () => {
    const element = document.getElementById('galeria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2')`
        }}
      />
      
      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-cream-50/80 to-pink-50/75" />
      
      {/* Geometric Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-rose-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-cream-200/40 to-yellow-200/30 rounded-full blur-3xl" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-rose-400/50 rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-yellow-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cream-400/60 rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 sm:py-20">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg border border-pink-100">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide">DONAS ARTESANALES</span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
            </div>
            
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-2">
                  Celebra con un
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                  toque de sabor
                </span>
              </h1>
              
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mx-auto lg:mx-0" />
            </div>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Donas artesanales para momentos inolvidables
              <span className="block text-base sm:text-lg text-pink-600 font-medium mt-2">
                ✨ Personalizamos cada pedido con amor para tus ocasiones especiales
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={scrollToGallery}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-base sm:text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                🎨 Ver Galería
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="https://wa.me/528129716337?text=¡Hola%20Algo%20Dulce!%20Me%20gustaría%20hacer%20un%20pedido%20😊🍩"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base sm:text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-green-300"
              >
                💬 Haz tu pedido por WhatsApp
              </a>
            </div>
          </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-pink-400 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-pink-400 rounded-full mt-1 sm:mt-2 animate-pulse" />
            </div>
            <span className="text-xs text-gray-500 font-medium hidden sm:block">Desliza para ver más</span>
          </div>
        </div>
      </div>
    </section>
  );
}