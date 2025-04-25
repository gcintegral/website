import React from 'react';
import { motion } from "framer-motion";
import "./ProyectGallery.css";
import { Link } from "react-router-dom";


const ProyectGallery = ({projects, onProjectClick }) =>{


    return(
      <section className="galeyproject-container">
      {projects.map((project, index) => (
        <motion.div 
          key={project.id} 
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          onClick={()=>onProjectClick(project)}
        >
          
            <img src={project.image} alt={project.name} className="project-image" />
            
            <p className="project-title">{project.name}</p>
    
            <div className="project-overlay"></div>
          
        </motion.div>
      ))}
    </section>
    );
}

export default ProyectGallery;
