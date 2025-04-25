import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Servicios/Servicios.css";

const servicios = [
  {
    id: 1,
    title: "Impermeabilización y mantenimiento",
    description:
      "Damos solución a sus problemas de humedad con productos de primera calidad. Y nos ocupamos del mantenimiento y/o remodelación de su hogar y/o empresa.",
    images: ["https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421016/2_qhffll.png", "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421014/1_nnxlcr.png"],
    list: [
      "Fachadas",
      "Muros",
      "Pscinas",
      "Terrazas",
      "Ventanas",
      "Cubiertas",
      "Pintura",
      "Restauración estructural",
      "Reparaciones locativos",
      "Recubrimientos especiales (Epóxicos industriales)",
      "Pisos (Industriales, deportivos, concreto arquitectónico)",
      "Sand Blasting",
      "Hidrolavado",
      "Pisos pulidos",
    ],
  },
  {
    id: 2,
    title: "Diseño, construcción de obras civiles y arquitectónicas",
    description:
      "Desarrollamos soluciones de acuerdo a las necesidades de nuestros clientes con las mejores soluciones constructivas a un precio justo y exequible.",
    image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421016/3_zhxnyw.png",
    list: [
      "Vivienda",
      "Industria",
      "Infraestructura",
      "Reformas y remodelaciones",
      "Edificaciones institucionales",
      "Comercial",
    ],
  },
  {
    id: 3,
    title: "Arquitectura bioclimática y paisajismo",
    description: "Diseño, construcción y mantenimiento.",
    image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745421019/4_sflfwd.png",
    list: ["Cubiertas verdes", "Terrazas verdes", "Muros verdes"],
  },
];

const Servicios = () => {
  return (
    <div className="services-page-container">
      <Header />

      <section className="services-header">
        <h2 className="services-title">Catálogo de servicios</h2>
      </section>

      <section className="services-container">
        {/* PRIMER SERVICIO CON CARRUSEL */}
        <motion.div
          className="service-card first-service"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="service-carousel full-height">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              interval={4000}
              transitionTime={1000}
              showArrows={true}
            >
              {servicios[0].images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image} alt={servicios[0].title} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="service-content">
            <h3 className="service-title">{servicios[0].title}</h3>
            <p className="service-description">{servicios[0].description}</p>
            <ul className="service-list">
              {servicios[0].list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* LOS DEMÁS SERVICIOS */}
        {servicios.slice(1).map((servicio, index) => (
          <motion.div
            key={servicio.id}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="service-image-container">
              <img src={servicio.image} alt={servicio.title} className="service-image" />
            </div>
            <div className="service-content">
              <h3 className="service-title">{servicio.title}</h3>
              <p className="service-description">{servicio.description}</p>
              <ul className="service-list">
                {servicio.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
