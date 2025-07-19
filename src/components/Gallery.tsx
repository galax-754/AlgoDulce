import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todas', emoji: '🍩' },
  { id: 'cumpleanos', name: 'Cumpleaños', emoji: '🎉' },
  { id: 'san-valentin', name: 'San Valentín', emoji: '❤️' },
  { id: 'dia-padre', name: 'Día del Padre', emoji: '👨' },
  { id: 'dia-madre', name: 'Día de la Madre', emoji: '👩' },
  { id: 'revelacion-genero', name: 'Revelación de Género', emoji: '👶' },
  { id: 'edicion-especial', name: 'Edición Especial', emoji: '🎁' },
  { id: 'cualquier-ocasion', name: 'Cualquier Ocasión', emoji: '✨' },
];

const galleryItems = [
  // Cumpleaños
  {
    id: 1,
    category: 'cumpleanos',
    title: 'Donas de Cumpleaños Coloridas',
    image: '/Cumpleaños.jpeg',
    description: 'Donas vibrantes y alegres perfectas para celebrar otro año de vida'
  },
  {
    id: 2,
    category: 'cumpleanos',
    title: 'Celebración Especial de Cumpleaños',
    image: '/Cumpleaños (2).jpeg',
    description: 'Diseños únicos y personalizados para hacer tu cumpleaños inolvidable'
  },
  {
    id: 3,
    category: 'cumpleanos',
    title: 'Fiesta de Cumpleaños Temática',
    image: '/Cumpleaños (3).jpeg',
    description: 'Donas decoradas con temas especiales para cumpleaños únicos'
  },
  {
    id: 4,
    category: 'cumpleanos',
    title: 'Cumpleaños Elegante',
    image: '/Cumpleaños (4).jpeg',
    description: 'Diseños sofisticados para celebraciones de cumpleaños especiales'
  },
  {
    id: 5,
    category: 'cumpleanos',
    title: 'Cumpleaños Divertido',
    image: '/Cumpleaños (5).jpeg',
    description: 'Donas llenas de color y diversión para los más pequeños'
  },
  {
    id: 6,
    category: 'cumpleanos',
    title: 'Celebración de Cumpleaños Premium',
    image: '/Cumpleaños (6).jpeg',
    description: 'Donas gourmet para celebraciones especiales de cumpleaños'
  },

  // San Valentín
  {
    id: 7,
    category: 'san-valentin',
    title: 'Amor en Cada Bocado',
    image: '/San valentin.jpeg',
    description: 'Donas románticas perfectas para expresar tu amor en San Valentín'
  },
  {
    id: 8,
    category: 'san-valentin',
    title: 'Corazones Dulces',
    image: '/San valentin (2).jpeg',
    description: 'Diseños románticos con corazones y colores del amor'
  },
  {
    id: 9,
    category: 'san-valentin',
    title: 'Romance en Rosa',
    image: '/San valentin (3).jpeg',
    description: 'Donas en tonos rosados para una celebración romántica'
  },
  {
    id: 10,
    category: 'san-valentin',
    title: 'Pasión y Dulzura',
    image: '/San valentin (4).jpeg',
    description: 'Combinación perfecta de pasión y dulzura para tu pareja'
  },
  {
    id: 11,
    category: 'san-valentin',
    title: 'Declaración de Amor',
    image: '/San valentin (5).jpeg',
    description: 'Donas que hablan por sí solas en el día del amor'
  },

  // Día del Padre
  {
    id: 12,
    category: 'dia-padre',
    title: 'Para el Mejor Papá',
    image: '/Dia del padre.jpeg',
    description: 'Donas especiales para celebrar al héroe de la casa'
  },
  {
    id: 13,
    category: 'dia-padre',
    title: 'Papá Súper Héroe',
    image: '/Dia del padre (2).jpeg',
    description: 'Diseños masculinos y divertidos para el día del padre'
  },
  {
    id: 14,
    category: 'dia-padre',
    title: 'Celebrando a Papá',
    image: '/Dia del padre (3).jpeg',
    description: 'Donas personalizadas con amor para el día del padre'
  },

  // Día de la Madre
  {
    id: 15,
    category: 'dia-madre',
    title: 'Amor de Madre',
    image: '/Dia de las madres.jpeg',
    description: 'Donas llenas de amor para la mujer más especial'
  },
  {
    id: 16,
    category: 'dia-madre',
    title: 'Flores para Mamá',
    image: '/Dia de las madres (2).jpeg',
    description: 'Diseños florales delicados para el día de las madres'
  },
  {
    id: 17,
    category: 'dia-madre',
    title: 'Mamá Especial',
    image: '/Dia de las madres (3).jpeg',
    description: 'Donas elegantes para celebrar a mamá en su día'
  },
  {
    id: 18,
    category: 'dia-madre',
    title: 'Dulzura Maternal',
    image: '/Dia de las madres (4).jpeg',
    description: 'Diseños tiernos y dulces para el día de las madres'
  },

  // Revelación de Género
  {
    id: 19,
    category: 'revelacion-genero',
    title: 'Sorpresa Rosa o Azul',
    image: '/Revelacion de genero.jpeg',
    description: 'Donas especiales para revelar el género de tu bebé'
  },
  {
    id: 20,
    category: 'revelacion-genero',
    title: 'Momento Especial',
    image: '/Revelacion de genero (2).jpeg',
    description: 'Diseños únicos para el momento más emocionante'
  },
  {
    id: 21,
    category: 'revelacion-genero',
    title: 'Bebé en Camino',
    image: '/Revelacion de genero (3).jpeg',
    description: 'Donas temáticas para celebrar la llegada del bebé'
  },

  // Edición Especial
  {
    id: 22,
    category: 'edicion-especial',
    title: 'Creación Única',
    image: '/Edicion especial.jpeg',
    description: 'Diseños exclusivos y limitados para ocasiones especiales'
  },
  {
    id: 23,
    category: 'edicion-especial',
    title: 'Arte Comestible',
    image: '/Edicion especial (2).jpeg',
    description: 'Donas que son verdaderas obras de arte'
  },
  {
    id: 24,
    category: 'edicion-especial',
    title: 'Diseño Premium',
    image: '/Edicion especial (3).jpeg',
    description: 'Ediciones especiales con técnicas avanzadas de decoración'
  },
  {
    id: 25,
    category: 'edicion-especial',
    title: 'Colección Exclusiva',
    image: '/Edicion especial (4).jpeg',
    description: 'Donas de edición limitada con diseños únicos'
  },
  {
    id: 26,
    category: 'edicion-especial',
    title: 'Innovación Dulce',
    image: '/Edicion especial (5).jpeg',
    description: 'Nuevas técnicas y sabores en diseños especiales'
  },

  // Cualquier Ocasión
  {
    id: 27,
    category: 'cualquier-ocasion',
    title: 'Momentos Dulces',
    image: '/Cualquier ocasion.jpeg',
    description: 'Donas perfectas para cualquier momento especial'
  },
  {
    id: 28,
    category: 'cualquier-ocasion',
    title: 'Celebración Diaria',
    image: '/Cualquier ocasion (1).jpeg',
    description: 'Porque cada día merece una celebración dulce'
  },
  {
    id: 29,
    category: 'cualquier-ocasion',
    title: 'Antojo Especial',
    image: '/Cualquier ocasion (2).jpeg',
    description: 'Para esos momentos cuando solo quieres algo dulce'
  },
  {
    id: 30,
    category: 'cualquier-ocasion',
    title: 'Dulce Sorpresa',
    image: '/Cualquier ocasion (3).jpeg',
    description: 'Donas para sorprender en cualquier momento'
  },
  {
    id: 31,
    category: 'cualquier-ocasion',
    title: 'Momento Perfecto',
    image: '/Cualquier ocasion (4).jpeg',
    description: 'Diseños versátiles para cualquier celebración'
  },
  {
    id: 32,
    category: 'cualquier-ocasion',
    title: 'Alegría Cotidiana',
    image: '/Cualquier ocasion (5).jpeg',
    description: 'Donas que alegran cualquier día de la semana'
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-pink-50 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Galería de Donas
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mx-auto mb-6 lg:mb-8" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras creaciones únicas para cada ocasión especial
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-50 shadow-md'
              }`}
            >
              <span className="text-base sm:text-lg">{category.emoji}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto min-h-40 sm:min-h-48 max-h-64 sm:max-h-80 object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-semibold text-sm sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 hidden sm:block">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-xl lg:rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-64 sm:max-h-96 object-contain bg-white"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{selectedImage.description}</p>
                <a
                  href="https://wa.me/528129716337?text=¡Hola%20Algo%20Dulce!%20Me%20interesa%20este%20diseño%20😊🍩"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium rounded-full transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                >
                  💬 Pedir este diseño
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}