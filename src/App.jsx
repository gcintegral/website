import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Proyectos from './components/Proyectos/Proyectos';
import Servicios from './components/Servicios/Servicios';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import Contacto from './components/Contacto/Contacto';
import Clientes from './components/Clientes/Clientes';
import Proyecto from './components/Proyecto/Proyecto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Proyectos' element={<Proyectos/>}/>
      <Route path='/Proyectos/:id' element={<Proyectos/>}/>
      <Route path='/Servicios' element={<Servicios/>}/>
      <Route path='/Clientes' element={<Clientes/>}/>
      <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
    </Routes>
  );
}

export default App;
