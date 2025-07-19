import React from 'react';
import { MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-cream-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Contacto y Pedidos
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mx-auto mb-6 lg:mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">
                ¿Tienes un antojo o un evento especial?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8">
                Escríbenos por WhatsApp y diseñamos algo dulce contigo. Estamos aquí para hacer realidad tus ideas más creativas.
              </p>

              <a
                href="https://wa.me/528129716337?text=¡Hola%20Algo%20Dulce!%20Me%20gustaría%20hacer%20un%20pedido%20😊🍩"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" />
                Enviar mensaje por WhatsApp
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Horarios</h4>
                <p className="text-xs lg:text-sm text-gray-600">
                  Lun - Vie: 8:00 AM - 8:00 PM
                  <br />
                  Sáb: 8:00 AM - 6:00 PM
                  <br />
                  Dom: Cerrado
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg text-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Entregas</h4>
                <p className="text-xs lg:text-sm text-gray-600">
                  Servicio a domicilio
                  <br />
                  y punto de recolección
                </p>
              </div>
            </div>
          </div>

          {/* TikTok Section */}
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 text-center">
                Síguenos en Redes Sociales
              </h3>
              
              {/* Social Media Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
                {/* TikTok Card */}
                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">TikTok</h4>
                  <p className="text-xs lg:text-sm text-gray-600 mb-3 lg:mb-4">Ve nuestras creaciones en video</p>
                  <a
                    href="https://www.tiktok.com/@algodulce_lasmadonitas76"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 lg:px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 text-xs lg:text-sm"
                  >
                    @algodulce_lasmadonitas76
                  </a>
                </div>

                {/* Facebook Card */}
                <div className="text-center p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Facebook</h4>
                  <p className="text-xs lg:text-sm text-gray-600 mb-3 lg:mb-4">Síguenos para más contenido</p>
                  <a
                    href="https://www.facebook.com/people/Las-Madonitas/61573020998804/?mibextid=wwXIfr&rdid=BW0LmIxB4c8S98tS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16mz2JCnym%2F%3Fmibextid%3DwwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 lg:px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 text-xs lg:text-sm"
                  >
                    Las Madonitas
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl lg:rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Proceso de decoración de donas"
                  className="w-full h-48 sm:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 lg:-top-4 -right-3 lg:-right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-2 lg:p-3 rounded-full shadow-lg animate-bounce">
                <span className="text-lg lg:text-xl">🍩</span>
              </div>
              <div className="absolute -bottom-3 lg:-bottom-4 -left-3 lg:-left-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white p-2 lg:p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <span className="text-lg lg:text-xl">💕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}