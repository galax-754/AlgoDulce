import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b-2 border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo" 
              alt="Algo Dulce Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Algo Dulce
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 text-sm xl:text-base"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 text-sm xl:text-base"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 text-sm xl:text-base"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors duration-200 text-sm xl:text-base"
            >
              Contacto
            </button>
          </nav>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/528129716337?text=¡Hola%20Algo%20Dulce!%20Me%20gustaría%20hacer%20un%20pedido%20😊🍩"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center px-3 py-2 xl:px-4 xl:py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-200 transform hover:scale-105 text-sm xl:text-base"
          >
            💬 WhatsApp
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-pink-100">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-pink-500 font-medium py-2 transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-gray-700 hover:text-pink-500 font-medium py-2 transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-left text-gray-700 hover:text-pink-500 font-medium py-2 transition-colors"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-gray-700 hover:text-pink-500 font-medium py-2 transition-colors"
              >
                Contacto
              </button>
              <a
                href="https://wa.me/528129716337?text=¡Hola%20Algo%20Dulce!%20Me%20gustaría%20hacer%20un%20pedido%20😊🍩"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-200 mt-2"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}