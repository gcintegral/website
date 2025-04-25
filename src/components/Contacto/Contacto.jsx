import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Contacto/Contacto.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <Header />

      {/* SECCIÓN DE CONTACTO */}
      <section className="contact-info">
        <div className="contact-text">
          <h2>¿Necesitas más información?</h2>
          <p>
            Solucionamos sus necesidades de mantenimiento, reparaciones,
            remodelaciones, diseños, obras civiles y arquitectónicas.
          </p>
          <img
            src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420873/contacto2_fbmeqa.png"
            alt="Siempre en obra"
            className="contact-banner"
          />
        </div>

        {/* FORMULARIO */}
        <form
          className="contact-form"
          action="https://formsubmit.co/gcintegral2012@gmail.com"
          method="POST"
        >
          <input type="text" name="nombre" placeholder="Nombre completo" required />
          <input type="email" name="email" placeholder="Correo electrónico" required />
          <input type="tel" name="telefono" placeholder="Teléfono" required />
          <textarea name="mensaje" placeholder="Comentario" rows="4" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* GOOGLE MAPS */}
      <section className="map-section">
        <h3>Dirección:</h3>
        <p>Carrera 16 #9 - 17 / entro Comercial La Popa/ Local 13/ Dosquebradas</p>
        <div className="map-container">
        <iframe
          title="Ubicación GC Integral Group"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.48120348227312!2d-75.68408541558745!3d4.821611217787135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388733415c8ffb%3A0x39c6a2b24dc0baea!2sLa%20Popa%20Centro%20Industrial%20Comercial!5e0!3m2!1ses-419!2sco!4v1743884820682!5m2!1ses-419!2sco"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        </div>
      </section>

      {/* SECCIÓN EQUIPO */}
      <section className="team-section">
        <h2>Nuestro equipo está listo para atenderte</h2>
        <img
          src="https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420874/contacto_q0nr7e.png"
          alt="Equipo de trabajo"
          className="team-image"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
