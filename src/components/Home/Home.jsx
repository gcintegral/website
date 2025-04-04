import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../Home/Home.css";
import ProyectGallery from "../ProyectGallery/ProyectGallery";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const galeyproject = [
    { id: 2, name: "Casa Carreno", image: "/imagenes/2.png" },
    { id: 3, name: "Edificio Bethel", image: "/imagenes/3.png"},
    { id: 19, name: "Casa La Clarita", image: "/imagenes/4.png" },
    { id: 20, name: "Casa Lago Calima", image: "/imagenes/5.png" },
    { id: 26, name: "Módulo 13 Casa La Alquería", image: "/imagenes/6.png" },
    { id: 28, name: "Camas Secado Cacao Casa Luker", image: "/imagenes/7.png" },
    { id: 33, name: "Recuperación Piso Piscina Pueblo Tapao", image: "/imagenes/8.png"},
    { id: 37, name: "Interv Módulo Horticultural UTP", image: "/imagenes/9.png"},
    { id: 43, name: "Baño Hotel Soratama", image: "/imagenes/10.png"},
  ];

  const project = [
    { id: 1, name: "Casa Carreño", image: "/imagenes/1.png" },
  ];

  const navigate = useNavigate();
  const [proyectoSeleccionado, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    navigate(`/Proyectos/${project.id}`);
  };


  return (
    <div className="home-container">
      <Header />

      {/* HERO SECTION - Carrusel */}
      <div className="hero-container">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval={3000}
          transitionTime={1000}
          showArrows={false}
          stopOnHover={false}
        >
          {project.map((project) => (
            <div key={project.id}>
              <img src={project.image} alt={project.name} className="hero-image" />
            </div>
          ))}
        </Carousel>
      </div>


      {/* INTRODUCCIÓN */}
      <section className="intro-container">
        <motion.h1 className="intro-title" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          G.C. Integral Group
        </motion.h1>

        <motion.h1 className="intro-title" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}>
          Ingeniería & Arquitectura
        </motion.h1>

        <motion.p className="intro-text" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}>
          Somos profesionales con más de 30 años de experiencia y reconocimiento en el sector.
        </motion.p>

        <motion.button className="intro-button" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} whileHover={{ scale: 1.1 }}>
          ¿Quiénes somos?
        </motion.button>
      </section>

      {/* SECCIÓN PROYECTOS */}

      <ProyectGallery projects={galeyproject} onProjectClick={handleProjectClick}/>

      <section className="info-button-container">
        <motion.button
          className="info-button"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Portafolio Digital
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
