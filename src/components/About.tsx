import React from 'react';
import { Heart, Star, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-cream-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Sobre Nosotros
                </span>
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mb-6 lg:mb-8" />
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              En <span className="font-semibold text-pink-600">Algo Dulce</span> nos dedicamos a transformar cada dona en una experiencia única. Personalizamos cada pedido con amor para cumpleaños, fechas especiales y más.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Con ingredientes de calidad y mucho diseño, creamos pequeños momentos inolvidables que endulzan tus celebraciones más importantes.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-12">
              <div className="text-center p-4 lg:p-6 bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-white fill-current" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Hecho con Amor</h3>
                <p className="text-xs lg:text-sm text-gray-600">Cada dona es creada con pasión y dedicación</p>
              </div>

              <div className="text-center p-4 lg:p-6 bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Star className="w-5 h-5 lg:w-6 lg:h-6 text-white fill-current" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Ingredientes Premium</h3>
                <p className="text-xs lg:text-sm text-gray-600">Solo utilizamos los mejores ingredientes</p>
              </div>

              <div className="text-center p-4 lg:p-6 bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm lg:text-base">Diseños Únicos</h3>
                <p className="text-xs lg:text-sm text-gray-600">Personalizamos según tu ocasión especial</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                alt="Donas artesanales de Algo Dulce"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 lg:-top-6 -right-4 lg:-right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-3 lg:p-4 rounded-full shadow-lg transform rotate-12">
              <span className="text-xl lg:text-2xl">🍩</span>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-gradient-to-r from-pink-400 to-rose-400 text-white p-3 lg:p-4 rounded-full shadow-lg transform -rotate-12">
              <span className="text-xl lg:text-2xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}