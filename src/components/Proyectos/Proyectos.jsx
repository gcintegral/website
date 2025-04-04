import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import "./Proyectos.css";
import ProyectGallery from "../ProyectGallery/ProyectGallery";
import Footer from "../Footer/Footer";
import { 
  proyectos_diseno, 
  proyectos_diseno_construccion, 
  proyectos_construccion, 
  proyectos_mantenimiento, 
  proyectos_asesoria, 
  proyectos_remodelaciones 
} from "../../Data";
import Proyecto from "../Proyecto/Proyecto";
import { useNavigate, useParams } from "react-router-dom";

const Proyectos = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [selected, setSelected] = useState("1");
  const proyectosData = {
    "1": proyectos_diseno,
    "2": proyectos_diseno_construccion,
    "3": proyectos_construccion,
    "4": proyectos_mantenimiento,
    "5": proyectos_asesoria,
    "6": proyectos_remodelaciones
  };

  const [proyectos, setProyectos] = useState(proyectosData["1"]);
  const [proyectoSeleccionado, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    navigate(`/Proyectos/${project.id}`);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setProyectos(proyectosData[option] || []);
    setSelectedProject(null);
    navigate("/Proyectos");
  };

  useEffect(() => {
    if (id) {
      const allProjects = Object.values(proyectosData).flat();
      const foundProject = allProjects.find((p) => p.id.toString() === id);
      if (foundProject) {
        setSelectedProject(foundProject);
      } else {
        navigate("/Proyectos");
      }
    }
  }, [id, navigate]);

  return (
    <div className="proyectos-container">
      <Header />

      {/* Menú de categorías deslizable en móviles */}
      <nav className="menu_proyectos">
        <ul>
          <li className={selected === "1" ? "active" : ""} onClick={() => handleSelect("1")}>
            Diseño
          </li>
          <li className={selected === "2" ? "active" : ""} onClick={() => handleSelect("2")}>
            Diseño y construcción
          </li>
          <li className={selected === "3" ? "active" : ""} onClick={() => handleSelect("3")}>
            Construcción
          </li>
          <li className={selected === "4" ? "active" : ""} onClick={() => handleSelect("4")}>
            Mantenimiento
          </li>
          <li className={selected === "5" ? "active" : ""} onClick={() => handleSelect("5")}>
            Asesoría e interventoría
          </li>
          <li className={selected === "6" ? "active" : ""} onClick={() => handleSelect("6")}>
            Remodelaciones
          </li>
        </ul>
      </nav>

      {/* Galería de Proyectos */}
      {proyectoSeleccionado ? (
        <Proyecto proyecto={proyectoSeleccionado} />
      ) : (
        <ProyectGallery projects={proyectos} onProjectClick={handleProjectClick} />
      )}

      <Footer />
    </div>
  );
};

export default Proyectos;
