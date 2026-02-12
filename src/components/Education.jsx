import React from 'react';

const Education = ({ t }) => {
  const items = [
    { 
      title: t.education.universityTitle, 
      date: t.education.universityDate, 
      description: t.education.university 
    },
    { 
      title: t.education.languagesTitle, 
      date: t.education.languagesDate, 
      description: t.education.languages 
    },
    { 
      title: t.education.professionalDevelopmentTitle, 
      date: t.education.professionalDevelopmentDate, 
      description: t.education.professionalDevelopment 
    },
  ];

  return (
    <section className="container mx-auto px-4 mb-12 animate-fade-in" id="Education">
      <h2 className="text-2xl font-bold mb-8">{t.education.title}</h2>
      
      {/* Contenedor principal con la línea vertical continua */}
      {/* ml-4 md:ml-8: Margen izquierdo para no pegar la línea al borde de la pantalla */}
      {/* border-l-2: El grosor de la línea */}
      {/* border-blue-400: El color de la línea (puedes cambiarlo a gray-300 si prefieres más sutil) */}
      <div className="relative border-l-2 border-blue-400 ml-4 md:ml-8 space-y-12 my-8">
        
        {items.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* El Punto (Dot) */}
            {/* absolute: Para posicionarlo libremente */}
            {/* -left-[9px]: Calculado para centrar un punto de 16px (w-4) sobre una línea de 2px */}
            {/* top-0: Alineado con la parte superior de la tarjeta */}
            {/* bg-blue-400: Color del punto */}
            {/* ring-4 ring-base-color: Crea un borde del color de fondo alrededor del punto para separarlo visualmente de la línea */}
            <span 
              className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-400 z-10 ring-4 ring-white dark:ring-[#121212] transition-transform duration-300 md:group-hover:scale-125"
            ></span>
            
            {/* Tarjeta de Contenido */}
            {/* Añadimos una flechita visual con 'before:' para que parezca que sale de la línea (opcional, estilo diagrama) */}
            <div className="relative bg-card p-6 rounded-lg shadow-lg transform transition duration-300 md:hover:scale-105 md:hover:bg-[rgba(219,219,219,0.25)]">
              <h3 className="text-xl font-bold mb-1 text-blue-500">{item.title}</h3>
              <h6 className="opacity-70 font-medium text-xs mb-3 uppercase tracking-wider">{item.date}</h6>
              <p className="text-sm md:text-base leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Education;