import { Outlet } from 'react-router-dom';
import Header from './Header';
import SubNav from './SubNav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

/**
 * Estructura común a todas las páginas: header de dos niveles + sub-nav de la
 * sección Oficina + contenido + footer. Todo el microsite vive dentro de la
 * sección Oficina, por lo que la sub-nav está siempre presente.
 */
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <SubNav />
      <main id="contenido" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
