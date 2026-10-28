import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            <span className="text-accent">Yonke</span>
            <span className="text-ink">App</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="hidden sm:block text-sm font-medium text-ink-secondary hover:text-ink transition-colors duration-150"
            >
              Inicio
            </Link>
            <Link
              href="/search"
              className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors duration-150"
            >
              Buscar piezas
            </Link>
            <Link
              href="/auth/login"
              className="bg-accent text-white px-5 py-2 text-sm font-medium hover:bg-accent-hover transition-colors duration-150"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
