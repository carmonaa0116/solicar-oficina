import { useState } from 'react';
import Section from '../components/Section';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import QuoteRequestForm from '../components/QuoteRequestForm';
import { useCart } from '../context/CartContext';

/**
 * Ruta dedicada /presupuesto: solicitud de presupuesto de toda la cesta.
 * Reutiliza QuoteRequestForm con el resumen de la cesta inyectado.
 *
 * El resumen se congela con useState al montar: si el envío tiene éxito se
 * vacía la cesta real (clearCart), pero el resumen ya mostrado en pantalla de
 * confirmación no debe desaparecer de golpe.
 */
export default function SolicitarPresupuesto() {
  const { items, clearCart } = useCart();
  const [resumenCesta] = useState(items);

  if (resumenCesta.length === 0) {
    return (
      <Section tone="white" padding="lg">
        <div className="mx-auto max-w-xl py-10 text-center">
          <p className="eyebrow text-primary">Presupuesto</p>
          <h1 className="mt-4 text-3xl leading-tight sm:text-4xl">Su cesta de presupuesto está vacía</h1>
          <p className="mt-5 text-base leading-relaxed text-graphite-500">
            Añada primero los productos que necesita desde el catálogo para poder enviarnos la solicitud, o pídanos
            presupuesto directamente sin usar la cesta.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/productos" variant="solid" onBg="light">
              Ver catálogo
            </Button>
            <Button to="/contacto" variant="outline" onBg="light">
              Solicitar sin cesta
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Presupuesto"
        titulo="Solicitud de presupuesto"
        descripcion="Revise los productos incluidos y complete sus datos de contacto. Le enviamos una propuesta cerrada, con plazo de entrega confirmado, en un máximo de 24 horas laborables."
        breadcrumbs={[{ label: 'Inicio', to: '/' }, { label: 'Productos', to: '/productos' }, { label: 'Solicitar presupuesto' }]}
      />

      <Section tone="white" padding="lg">
        <div className="mx-auto max-w-2xl">
          <QuoteRequestForm tone="light" idPrefijo="cesta" resumenCesta={resumenCesta} onEnviado={clearCart} />
        </div>
      </Section>
    </>
  );
}
