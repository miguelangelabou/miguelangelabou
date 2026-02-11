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
      <h2 className="text-2xl font-bold mb-6">{t.education.title}</h2>
      
      {/* Contenedor de la línea de tiempo */}
      <div className="relative border-l-2 border-gray-400 ml-3 md:ml-6 space-y-10 pl-8 py-2">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Punto Azul (Timeline Dot) */}
            {/* Se posiciona absolutamente relativo al item para estar siempre centrado con la tarjeta */}
            <span 
              className="absolute top-0 -left-[41px] w-4 h-4 rounded-full bg-blue-400 z-10 md:hover:scale-125 transition-transform duration-300"
              style={{ boxShadow: '0 0 0 4px var(--base-color)' }} // Crea un borde del color del fondo para separar visualmente de la línea
            ></span>
            
            {/* Tarjeta de Contenido */}
            <div className="bg-card p-6 rounded-lg shadow-lg transform transition duration-300 md:hover:scale-105">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <h6 className="opacity-70 leading-none text-xs mb-2">{item.date}</h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;