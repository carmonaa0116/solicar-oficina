import Section from '../components/Section';
import Button from '../components/Button';

/** Página 404 (también se reutiliza cuando un slug de detalle no existe). */
export default function NoEncontrado({ mensaje = 'La página que busca no existe o ha cambiado de dirección.' }) {
  return (
    <Section tone="white" padding="lg">
      <div className="mx-auto max-w-xl py-10 text-center">
        <p className="eyebrow text-primary">Error 404</p>
        <h1 className="mt-4 text-3xl leading-tight sm:text-4xl">Página no encontrada</h1>
        <p className="mt-5 text-base leading-relaxed text-graphite-500">{mensaje}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/" variant="solid" onBg="light">
            Volver al inicio
          </Button>
          <Button to="/productos" variant="outline" onBg="light">
            Ver catálogo
          </Button>
        </div>
      </div>
    </Section>
  );
}
