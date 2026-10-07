export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-400">
        <p>&copy; {new Date().getFullYear()} YonkeApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
