import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Proyectos from './pages/Proyectos';
import ProyectoDetalle from './pages/ProyectoDetalle';
import Marcas from './pages/Marcas';
import Blog from './pages/Blog';
import BlogDetalle from './pages/BlogDetalle';
import Contacto from './pages/Contacto';
import SolicitarPresupuesto from './pages/SolicitarPresupuesto';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Cookies from './pages/Cookies';
import NoEncontrado from './pages/NoEncontrado';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:slug" element={<ProductoDetalle />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/presupuesto" element={<SolicitarPresupuesto />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  );
}
