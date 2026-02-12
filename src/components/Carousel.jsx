import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Carousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Lista de imágenes
  const logos = [
    { src: "/assets/NODE.webp", alt: "Node.js" },
    { src: "/assets/SQL_MYSQL.webp", alt: "MySQL" },
    { src: "/assets/REACT_AVANZADO.webp", alt: "React" },
    { src: "/assets/AZURE.webp", alt: "Azure" },
    { src: "/assets/GIT_GITHUB.webp", alt: "Git" },
    // Duplicados para el loop visual inmediato
    { src: "/assets/NODE.webp", alt: "Node.js" },
    { src: "/assets/SQL_MYSQL.webp", alt: "MySQL" },
    { src: "/assets/REACT_AVANZADO.webp", alt: "React" },
  ];

  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <>
      <section className="py-12 w-full overflow-hidden bg-white/30 dark:bg-black/20 border-y border-gray-200 dark:border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-full mx-auto px-4 mask-gradient">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            
            {/* GRUPO 1 */}
            <div className="flex gap-12 mx-6 items-center">
              {logos.map((logo, index) => (
                <div 
                  key={`g1-${index}`} 
                  className="group relative flex flex-col items-center justify-center cursor-zoom-in transition-all duration-300"
                  onClick={() => setSelectedImage(logo)}
                >
                  {/* Contenedor de la imagen con efecto Hover */}
                  <div className="relative p-2 rounded-xl bg-white/50 dark:bg-black/20 border border-transparent group-hover:border-blue-500/30 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-all duration-300 shadow-sm group-hover:shadow-blue-500/20 group-hover:shadow-lg">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      /* AUMENTAMOS EL TAMAÑO AQUÍ: h-32 (128px) en móvil, h-40 (160px) en escritorio */
                      className="h-32 md:h-40 w-auto object-contain opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                    />
                    
                    {/* Icono de Lupa que aparece al hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/60 text-white p-2 rounded-full backdrop-blur-sm">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* GRUPO 2 (Duplicado exacto para el loop infinito) */}
            <div className="flex gap-12 mx-6 items-center">
              {logos.map((logo, index) => (
                <div 
                  key={`g2-${index}`} 
                  className="group relative flex flex-col items-center justify-center cursor-zoom-in transition-all duration-300"
                  onClick={() => setSelectedImage(logo)}
                >
                  <div className="relative p-2 rounded-xl bg-white/50 dark:bg-black/20XH border border-transparent group-hover:border-blue-500/30 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-all duration-300 shadow-sm group-hover:shadow-blue-500/20 group-hover:shadow-lg">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-32 md:h-40 w-auto object-contain opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                    />
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/60 text-white p-2 rounded-full backdrop-blur-sm">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- MODAL / LIGHTBOX --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          {/* Imagen Grande */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center animate-fade-up"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar si se da click a la imagen misma
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl shadow-blue-500/20 border-2 border-white/10"
            />
            
            {/* Caption opcional */}
            <p className="absolute -bottom-10 text-white/80 font-mono text-lg tracking-wider">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;