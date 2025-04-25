import React from 'react'
import { motion } from 'framer-motion'
import Header from '../Header/Header'
import "./Clientes.css"
import Footer from '../Footer/Footer'

const Clientes = () => {

  const clientes = [
    { id: 1, name: "Incolmotos Yamaha", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420821/2_tw0hje.png" },
    { id: 2, name: "Servimotos", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420840/3_kt6ogt.png" },
    { id: 3, name: "Casa Luker", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420871/4_ubffzu.png" },
    { id: 4, name: "Luker Agrícola", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420871/5_bvhxms.png" },
    { id: 5, name: "Hotel Soratama Pereira", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420872/6_pj3uty.png" },
    { id: 6, name: "Importadora Okla", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420872/7_gm0wev.png" },
    { id: 7, name: "Liceo Francés de Pereira", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420872/8_mwwenu.png" },
    { id: 8, name: "Fundación Liceo Inglés de Pereira", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420873/9_aydiip.png" },
    { id: 9, name: "Aeropuerto Mantecaña", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420820/10_iv2fib.png" },
    { id: 10, name: "Scribe", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420820/11_v2ybt5.png" },
    { id: 11, name: "Smurfit Kappa, Cartón Colombia S.A", image: "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420821/12_rvirko.png" }
  ]

  const main_image = "https://res.cloudinary.com/dkcdgfm0b/image/upload/v1745420823/1_pijs5c.png";

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
