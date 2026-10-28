import Link from 'next/link';
import Button from '@/components/Button';

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className="w-full h-auto max-w-lg mx-auto anim-drift"
      aria-hidden="true"
    >
      {/* Large gear — outer ring */}
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="2.5" opacity="0.15" />
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="2" opacity="0.1" />
      <circle cx="200" cy="200" r="40" fill="currentColor" opacity="0.06" />

      {/* Gear teeth */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={200 + Math.cos(rad) * 135}
            y1={200 + Math.sin(rad) * 135}
            x2={200 + Math.cos(rad) * 158}
            y2={200 + Math.sin(rad) * 158}
            stroke="currentColor"
            strokeWidth="10"
            opacity="0.12"
          />
        );
      })}

      {/* Small gear — top right */}
      <circle cx="345" cy="95" r="48" stroke="currentColor" strokeWidth="2" opacity="0.12" />
      <circle cx="345" cy="95" r="16" fill="currentColor" opacity="0.05" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={`s-${angle}`}
            x1={345 + Math.cos(rad) * 44}
            y1={95 + Math.sin(rad) * 44}
            x2={345 + Math.cos(rad) * 58}
            y2={95 + Math.sin(rad) * 58}
            stroke="currentColor"
            strokeWidth="7"
            opacity="0.09"
          />
        );
      })}

      {/* Piston — bottom left */}
      <g transform="translate(70, 330)" opacity="0.08">
        <rect x="-22" y="-45" width="44" height="62" fill="currentColor" />
        <rect x="-17" y="-58" width="34" height="18" fill="currentColor" />
        <rect x="-4" y="17" width="8" height="40" fill="currentColor" />
        <circle cx="0" cy="65" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-ground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy — left-aligned, large type */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-display leading-display text-ink anim-hero">
              Piezas para tu vehículo
            </h1>
            <p className="mt-6 text-lg text-ink-secondary max-w-lg leading-relaxed anim-hero-1">
              El inventario más grande de autopartes usadas y reconstruidas,
              con garantía de calidad.
            </p>
            <div className="mt-10 anim-hero-2">
              <Link href="/search">
                <Button className="text-lg px-8 py-4">Buscar piezas</Button>
              </Link>
            </div>
          </div>

          {/* Illustration — drawn from the subject */}
          <div className="hidden lg:block text-accent anim-hero-slide">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
