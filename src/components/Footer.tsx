import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3 lg:mb-4">
              <img 
                src="/logo" 
                alt="Algo Dulce Logo" 
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-white/30"
              />
              <span className="text-xl lg:text-2xl font-bold">Algo Dulce</span>
            </div>
            <p className="text-pink-100 text-xs lg:text-sm">
              Porque cada momento merece una dona especial
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Contacto</h4>
            <a
              href="https://wa.me/528129716337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 lg:space-x-2 text-pink-100 hover:text-white transition-colors text-sm lg:text-base"
            >
              <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
              <span>+52 812 971 6337</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-3 lg:space-x-4">
              <a
                href="https://www.facebook.com/algodulce"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@algodulce"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                title="TikTok"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/528129716337"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-400/30 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center">
          <p className="text-pink-100 text-xs lg:text-sm">
            © 2025 Algo Dulce. Todos los derechos reservados.
          </p>
          <p className="text-pink-200 text-xs lg:text-xs mt-1 lg:mt-2 font-medium">
            "Algo Dulce — Porque cada momento merece una dona especial." ✨
          </p>
        </div>
      </div>
    </footer>
  );
}