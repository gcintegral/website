import React from 'react'
import { motion } from 'framer-motion'
import Header from '../Header/Header'
import "./Clientes.css"
import Footer from '../Footer/Footer'

const Clientes = () => {

  const clientes = [
    { id: 1, name: "Incolmotos Yamaha", image: "/imagenes/clientes/2.png" },
    { id: 2, name: "Servimotos", image: "/imagenes/clientes/3.png" },
    { id: 3, name: "Casa Luker", image: "/imagenes/clientes/4.png" },
    { id: 4, name: "Luker Agrícola", image: "/imagenes/clientes/5.png" },
    { id: 5, name: "Hotel Soratama Pereira", image: "/imagenes/clientes/6.png" },
    { id: 6, name: "Importadora Okla", image: "/imagenes/clientes/7.png" },
    { id: 7, name: "Liceo Francés de Pereira", image: "/imagenes/clientes/8.png" },
    { id: 8, name: "Fundación Liceo Inglés de Pereira", image: "/imagenes/clientes/9.png" },
    { id: 9, name: "Aeropuerto Mantecaña", image: "/imagenes/clientes/10.png" },
    { id: 10, name: "Scribe", image: "/imagenes/clientes/11.png" },
    { id: 11, name: "Smurfit Kappa, Cartón Colombia S.A", image: "/imagenes/clientes/12.png" }
  ]

  const main_image = "/imagenes/clientes/1.png";

  return (
    <div>
      <Header />
      
      <section className="clientes_section_container">
       
        <motion.div
          className="image_container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={main_image} alt="" height="998px" className="src" />
        </motion.div>

       
        <motion.div
          className="clientes_container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="clientes_title">Algunos de nuestros clientes</h2>
          {clientes.map((cliente) => (
            <div key={cliente.id} className="client_container">
              <img src={cliente.image} alt={cliente.name} className="client_image" />
              <span className="body_25">{cliente.name}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default Clientes
