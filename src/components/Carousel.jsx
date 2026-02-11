import React from 'react';

const Carousel = () => {
  const images = [
    { src: "/assets/NODE.webp", alt: "Node" },
    { src: "/assets/SQL_MYSQL.webp", alt: "MySQL" },
    { src: "/assets/REACT_AVANZADO.webp", alt: "React" },
    { src: "/assets/AZURE.webp", alt: "Azure" },
    { src: "/assets/GIT_GITHUB.webp", alt: "Git" },
    { src: "/assets/NODE.webp", alt: "Node" },
    { src: "/assets/SQL_MYSQL.webp", alt: "MySQL" },
    { src: "/assets/REACT_AVANZADO.webp", alt: "React" },
    { src: "/assets/AZURE.webp", alt: "Azure" },
    { src: "/assets/GIT_GITHUB.webp", alt: "Git" },
  ];

  return (
    <section className="overflow-hidden w-[97%] mx-auto mb-12">
      <div className="animation-carousel-track flex gap-[5%] w-[400%] md:w-[200%]">
        {images.map((img, index) => (
          <img 
            key={index}
            className="carousel-image transform transition duration-300 md:hover:scale-105 cursor-pointer" 
            alt={img.alt} 
            src={img.src} 
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;