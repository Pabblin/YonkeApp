import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Wordmark returns at full width */}
          <div>
            <Link
              href="/"
              className="text-4xl font-extrabold tracking-display inline-block"
            >
              <span className="text-accent">Yonke</span>
              <span className="text-ink">App</span>
            </Link>
            <p className="mt-4 text-ink-secondary max-w-sm leading-relaxed">
              El inventario más grande de autopartes usadas y reconstruidas,
              con garantía de calidad.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex gap-16 md:justify-end">
            <div>
              <h3 className="text-sm font-semibold text-ink mb-4">
                Navegación
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-ink-secondary hover:text-ink transition-colors duration-150"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search"
                    className="text-ink-secondary hover:text-ink transition-colors duration-150"
                  >
                    Buscar piezas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/login"
                    className="text-ink-secondary hover:text-ink transition-colors duration-150"
                  >
                    Iniciar sesión
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/register"
                    className="text-ink-secondary hover:text-ink transition-colors duration-150"
                  >
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-sm text-ink-secondary">
          <p>
            &copy; {new Date().getFullYear()} YonkeApp. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
