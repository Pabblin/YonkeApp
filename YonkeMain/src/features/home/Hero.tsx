import Link from 'next/link';
import Button from '@/components/Button';

export default function Hero() {
  return (
    <div className="relative bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Encuentra las mejores piezas
            <span className="block text-primary">para tu vehículo</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-neutral-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            El inventario más grande de autopartes usadas y reconstruidas, con garantía de calidad.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/search">
                <Button className="w-full text-lg px-8 py-3">Buscar piezas</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
