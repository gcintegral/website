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
    { id: 2, name: "Casa Carreno", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420816/2_ktpawj.png" },
    { id: 3, name: "Edificio Bethel", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420816/3_dk20n5.png"},
    { id: 19, name: "Casa La Clarita", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420816/4_eevkck.png" },
    { id: 20, name: "Casa Lago Calima", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420817/5_qzkbq7.png" },
    { id: 26, name: "Módulo 13 Casa La Alquería", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420819/6_z3lcn0.png" },
    { id: 28, name: "Camas Secado Cacao Casa Luker", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420818/7_szgm35.png" },
    { id: 33, name: "Recuperación Piso Piscina Pueblo Tapao", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420819/8_hq4irb.png"},
    { id: 37, name: "Interv Módulo Horticultural UTP", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420820/9_ks4ukk.png"},
    { id: 43, name: "Baño Hotel Soratama", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420815/10_jhcspl.png"},
  ];

  const project = [
    { id: 1, name: "Casa Carreño", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420814/1_cktisj.png" },
    { id: 2, name: "Casa Carreño", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420817/11_oblrbr.png" },
    { id: 2, name: "Casa Carreño", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420820/12_zq9gff.png" },
    { id: 2, name: "Casa Carreño", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420823/13_u5b5lz.png" },
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
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        interval={4000}
        transitionTime={1000}
        showArrows={false}
        stopOnHover={false}
      >
        {project.map((project) => (
          <div key={project.id} className="slide-container">
            <img src={project.image} alt={project.name} />
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

        <motion.p className="intro-text" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}>
          Somos profesionales con más de 30 años de experiencia y reconocimiento en el sector.
        </motion.p>

        <motion.button
          className="info-button"
          onClick={() => navigate("/QuienesSomos")}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ¿Quiénes somos?
        </motion.button>

      </section>

      {/* SECCIÓN PROYECTOS */}

      <ProyectGallery projects={galeyproject} onProjectClick={handleProjectClick}/>

      <section className="info-button-container">
      <motion.button
        className="info-button"
        onClick={() => navigate("/Proyectos")}
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
