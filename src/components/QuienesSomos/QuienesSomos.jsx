import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../QuienesSomos/QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-page">
      <Header />
        {/*  marca de agua */}
  <div className="marca-de-agua"></div>

      <motion.section
  className="quienes-somos-header"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2 className="quienes-somos-title">¿Quiénes somos?</h2>
  <img
    src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421011/1_vbvmtz.png"
    alt="Equipo de trabajo"
    className="main-image"
  />
  <p className="quienes-somos-description">
          GC INTEGRAL GROUP S.A.S. está conformada por un grupo de profesionales con más de 30 años de experiencia 
          que aportan cada día, su amplio conocimiento y experiencia, para el engrandecimiento de la misma. 
          Nuestro grupo está conformado por profesionales idóneos para la realización de las labores pertinentes 
          a cada profesión.
        </p>
        <p className="quienes-somos-description">
          Estamos para solucionar desde el más pequeño de los inconvenientes de su proyecto hasta la más delicada 
          de las labores requeridas, con la mejor calidad, cumplimiento, personal capacitado en cada una de las 
          actividades de la construcción y a precios competitivos con el mercado.
        </p>
        <h3 className="quienes-somos-subtitle">Nuestra misión:</h3>
        <p className="quienes-somos-description">
          Ofrecer a nuestros clientes resultados seguros y modernos, para mejorar las condiciones de sus espacios, 
          y mejorar la calidad de vida de nuestros colaboradores a través del compromiso y responsabilidad social.
        </p>
        <h3 className="quienes-somos-subtitle">Nuestra visión:</h3>
        <p className="quienes-somos-description">
          Realizar los sueños y solucionar las necesidades de nuestros clientes.
        </p>
        <h3 className="quienes-somos-subtitle">Valores corporativos:</h3>
        <p className="quienes-somos-description">
          Calidad, honestidad y responsabilidad social.
        </p>
      </motion.section>

      {/* Sección Nuestras Instalaciones */}
      <section className="instalaciones-section">
        <h2 className="section-title">Nuestras instalaciones</h2>
        <p className="section-description2">
          Contamos con oficinas y bodega en el sector La Popa Dosquebradas.
        </p>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={4000}>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421010/2_tapc7f.png" alt="Instalación 1" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421010/3_foldqd.png" alt="Instalación 2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421011/4_md68dd.png" alt="Instalación 3" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421011/5_dqb4w0.png" alt="Instalación 4" />
          </div>
          
        </Carousel>
      </section>

      {/* Sección Equipo y Herramienta */}
      <section className="equipo-section">
        <h2 className="section-title">Equipo y herramienta</h2>
        <p className="section-description">
          Contamos con herramientas y equipos propios, cumplimos con revisiones periódicas y mantenimiento preventivo 
          para cumplir con los estándares de seguridad y calidad en el trabajo.
        </p>
        <p className="section-description">
          Contamos con equipos como:
        </p>
        <ul className="quienes-somos-list">
          <li>Andamios certificados</li>
          <li>Equipos de rapel (Trabajo suspendido)</li>
          <li>Equipos mecánicos para pintura (Epoxi, vinilos, etc.)</li>
          <li>Equipos para preparación de superficies, pulido y brillado de pisos en seco, con bajo nivel de ruido y sin polvo.</li>
        </ul>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} interval={4000}>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421013/6_hofpwl.png" alt="Equipo 2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421013/7_pjvsnj.png" alt="Equipo 3" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421014/8_anmo46.png" alt="Equipo 4" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421013/9_rihrii.png" alt="Equipo 5" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421010/10_my7x1h.png" alt="Equipo 6" />
          </div>

        </Carousel>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
